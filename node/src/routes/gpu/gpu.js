const { exec } = require('child_process')

exec('system_profiler SPDisplaysDataType', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  // Normalise the result here to get the GPU name
  console.log(`stdout: ${stdout}`)
})
