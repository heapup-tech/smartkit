#!/usr/bin/env node

import prompts from 'prompts'
import chalk from 'chalk'
import validateNpmPackageName from 'validate-npm-package-name'
import path from 'path'
import fs from 'fs-extra'
import cpy from 'cpy'
import { fileURLToPath } from 'url'
import { detectPackageManager } from './detectPackageManager'
import { execa } from 'execa'

const log = console.log

log()
log(chalk.greenBright('  Welcome to using smartkit! 🚀'))
log()

const reservedPackageNames = ['react', 'next', 'smartkit']

async function init() {
  const res = await prompts(
    [
      {
        type: 'select',
        name: 'template',
        message: 'Select a template',
        choices: [
          { title: chalk.blueBright('Next'), value: 'next-app' },
          { title: chalk.cyan('React'), value: 'react-app' }
        ]
      },
      {
        initial: 'smartkit-sui-dapp',
        message: 'What is the name of your project?',
        name: 'projectName',
        type: 'text',
        validate: (value) => {
          const isValid = validateNpmPackageName(value).validForNewPackages

          if (!isValid || reservedPackageNames.includes(value)) {
            return 'Invalid project name'
          }

          return true
        }
      }
    ],
    {
      onCancel: () => {
        log(chalk.red('✖') + ' Operation cancelled')
      }
    }
  )

  const { template, projectName } = res

  const __dirname = fileURLToPath(new URL('.', import.meta.url))

  const sourcePath = path.join(__dirname, `../templates/${template}`)
  const targetPath = path.join(process.cwd(), projectName)

  if (fs.existsSync(targetPath)) {
    throw new Error('The project already exists')
  }

  const ignoreList: string[] = ['node_modules', '.next', 'CHANGELOG.md']

  await cpy(path.join(sourcePath, '**', '*'), targetPath, {
    filter: (file) =>
      ignoreList.every((ignore) => {
        const relativePath = path.relative(sourcePath, file.path)
        return !relativePath.includes(ignore)
      })
  })

  const pkgJson = await fs.readJson(path.join(targetPath, 'package.json'))
  pkgJson.name = projectName

  await fs.writeFile(
    path.join(targetPath, 'package.json'),
    JSON.stringify(pkgJson, null, 2)
  )

  const packageManager = detectPackageManager()

  log(
    chalk.greenBright(
      `\n  Installing dependencies with ${chalk.bold(packageManager)} \n`
    )
  )
  await execa(packageManager, ['install'], {
    cwd: targetPath,
    stdio: 'inherit'
  })
  log(chalk.green(`\n  cd ${projectName}`))
  log(chalk.green(`  ${packageManager} run dev\n`))
}

init().catch((e) => {
  log(e)
})
