import { build, BuildOptions, context } from 'esbuild'

const isWatch = process.argv.includes('--watch')

const executeBuild = async (buildOptions: BuildOptions) => {
  if (isWatch) {
    const buildContext = await context(buildOptions)
    await buildContext.watch()
    return
  }

  build(buildOptions)
    .then(() => {
      console.log('Build complete')
    })
    .catch(() => process.exit(1))
}

const buildOptions: BuildOptions = {
  entryPoints: ['./src/cli.ts'],
  outdir: 'dist',
  bundle: true,
  format: 'esm',
  platform: 'node',
  splitting: true,
  packages: 'external'
}

executeBuild(buildOptions)
