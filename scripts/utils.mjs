export const unscopedPackageName = async (pwd) => {
  const { name } = require(`${pwd}/package.json`)
  const { stdout: unscoped_name } =
    await $`echo ${name} | sed 's/@jackdbd\\///' | tr -d '\n'`
  return unscoped_name
}
