const { basename, resolve } = require('path')
const chalk = require('chalk')
const { copy } = require('fs-extra')
const { exec } = require('child_process')
const { promisify } = require('util')
const { readFile } = require('fs').promises

const asyncExec = promisify(exec)

// http://patorjk.com/software/taag/#p=display&h=2&f=Ogre&t=Architecture%20CSS
const BANNER = String.raw`
   _            _     _ _            _                      ___  __  __
  /_\  _ __ ___| |__ (_) |_ ___  ___| |_ _   _ _ __ ___    / __\/ _\/ _\
 //_\\| '__/ __| '_ \| | __/ _ \/ __| __| | | | '__/ _ \  / /   \ \ \ \
/  _  \ | | (__| | | | | ||  __/ (__| |_| |_| | | |  __/ / /___ _\ \_\ \
\_/ \_/_|  \___|_| |_|_|\__\___|\___|\__|\__,_|_|  \___| \____/ \__/\__/
`

run()

function announce(message, { mode = 'info' } = {}) {
  const color = mode === 'success' ? 'bold.green' : 'cyan'
  console.info(chalk`{${color} ${message}}`)
}

function backUp(current) {
  const root = getRoot()
  const source = getExercisePath(root)
  const target = getBackupPath(root, current)

  const [s, t] = [source, target].map((path) => basename(path))
  announce(`- Sauvegarde de ${s} dans ${t}…`)

  return copy(source, target)
}

function bailOut(message) {
  const header = 'OUI MAIS NON…'
  for (const line of [header, '-'.repeat(header.length), '', message, '']) {
    console.error(chalk`{bold.red ${line}}`)
  }
  // We use the non-semantic zero exit code (success) to avoid npm’s error dumps
  process.exit(0)
}

function cdToTrainingRoot() {
  process.chdir(getRoot())
}

async function cleanlySwitchTo(target) {
  announce(`- Bascule sur l’exercice ${target}…`)
  await runGit(`reset --hard '${getExerciseTag(target)}'`)
  announce(`- Nettoyage des éventuels fichiers reliquats…`)
  await runGit('clean -fd -- exercice')
}

function displayRetroBanner() {
  console.log(chalk`{bold.magenta ${BANNER}}`.trim())
}

function getBackupPath(root, exo) {
  return resolve(root, `.mon-exercice-${exo}`)
}

async function getCurrentExercise() {
  const path = resolve(getRoot(), 'package.json')
  const payload = await readFile(path, 'utf-8')
  return JSON.parse(payload).exercise || 1
}

function getExercisePath(root) {
  return resolve(root, `exercice`)
}

async function getExercises(direction = 'next') {
  const current = await getCurrentExercise()
  const target = Math.max(current + (direction === 'prev' ? -1 : 1), 1)

  if (target === current) {
    bailOut('Tu es déjà sur le premier exercice, y’a rien avant poupette…')
  }

  const max = await getMaximumExercise()
  if (target > max) {
    bailOut('Tu es déjà sur le dernier exercice, y’a rien après poupette…')
  }

  return { current, target }
}

function getExerciseTag(exo) {
  return `debut-exo-${exo}`
}

async function getMaximumExercise() {
  const stdout = await runGit(`tag --list '${getExerciseTag('*')}'`)
  // Tags end with numbers so we filter on that, convert to actual numbers,
  // and sort as numbers (in decreasing order here, so the highest number is
  // first in the list).
  return stdout
    .match(/\d+\n/g)
    .map(Number)
    .sort((a, b) => b - a)[0]
}

function getRoot() {
  return resolve(__dirname, '..')
}

async function runGit(cmd) {
  try {
    const { stdout } = await asyncExec(`git ${cmd}`, {
      cwd: __dirname,
      windowsHide: true,
    })
    return stdout
  } catch ({ code, stderr }) {
    bailOut(`Appel Git échoué (code ${code}).  Erreur: ${stderr}`)
  }
}

async function run() {
  displayRetroBanner()
  try {
    cdToTrainingRoot()
    const { current, target } = await getExercises(process.argv[2])
    await backUp(current)
    await cleanlySwitchTo(target)
    announce(`Tu peux démarrer l’exercice ${target} ! 😎`, { mode: 'success' })
  } catch (err) {
    bailOut(`Un souci est survenu : ${err.message}`)
  }
}
