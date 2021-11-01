const { exec } = require('child_process')
const promisify = require('util').promisify
const execAsync = promisify(exec)

const command = 'sudo powermetrics --samplers gpu_power -i500 -n1'

const parseUtilizationPercentage = (output) =>
  parseFloat(
    output
      .split('\n')
      .find((block) => block.includes('GPU 0 GPU Busy'))
      ?.split(':')?.[1]
      ?.trim() || '0',
  )

const getGpuUtilization = async () => {
  const { stdout } = await execAsync(command)
  console.log(parseUtilizationPercentage(stdout))
}

setInterval(() => {
  getGpuUtilization()
}, [1000])

// const output = `stdout: Machine model: MacBookPro16,2
// SMC version: Unknown
// EFI version: 1554.3.0
// OS version: 20D91
// Boot arguments: chunklist-security-epoch=0 -chunklist-no-rev2-dev
// Boot time: Thu Oct 28 10:02:16 2021

// *** Sampled system activity (Sat Oct 30 20:25:28 2021 -0600) (501.25ms elapsed) ***

// **** GPU usage ****

// GPU 0 name IntelIG
// GPU 0 C-state residency: 99.28% (0.20%, 99.08%)
// GPU 0 P-state residency: 1100MHz: 0.00%, 1050MHz: 0.00%, 1000MHz: 0.00%, 950MHz: 0.00%, 900MHz: 0.00%, 850MHz: 0.00%, 800MHz: 0.00%, 750MHz: 0.00%, 700MHz: 0.00%, 650MHz: 0.00%, 600MHz: 0.00%, 550MHz: 0.00%, 500MHz: 0.72%, 450MHz: 0.00%, 400MHz: 0.00%, 350MHz: 0.00%, 300MHz: 0.00%
// GPU 0 average active frequency as fraction of nominal (300.00Mhz): 166.67% (500.00Mhz)
// GPU 0 HW average active frequency  : 0.00%
// GPU 0 GPU Busy                     : 0.72%
// GPU 0 DC6 Residency                : 0.00%
// GPU 0 [PSR] GPU + TCON are Off     : 0.00%
// GPU 0 [PSR] Only GPU is On         : 0.00%
// GPU 0 [PSR] Only TCON is On        : 0.08%
// GPU 0 [PSR] GPU + TCON are On      : 99.92%
// GPU 0 [PSR] StateMachine Bypass    : 0.00%
// GPU 0 [PSR] StateMachine FIFO      : 100.00%
// GPU 0 [PSR] StateMachine Others    : 0.00%
// GPU 0 DPB Strong On                : 0.00%
// GPU 0 DPB Weak On                  : 0.00%
// GPU 0 1Slice      on            : 0.00%
// GPU 0 2Slices     on            : 100.00%
// GPU 0 PPFM on                      : 0.00%
// GPU 0 Throttle High Priority(%)    : 0
// GPU 0 Throttle NormalHi Priority(%): 0
// GPU 0 Throttle Normal Priority(%)  : 0
// GPU 0 Throttle Low Priority(%)     : 0
// GPU 0 Slice switch                 : 0 (0.00/second)
// GPU 0 DC6 Exit Reason - Flip       : 0 (0.00/second)
// GPU 0 DC6 Exit Reason - Register   : 0 (0.00/second)
// GPU 0 DC6 Exit Reason - Gamma      : 0 (0.00/second)
// GPU 0 DC6 Exit Reason - Interrupt  : 0 (0.00/second)
// GPU 0 DC6 Exit Reason - Cursor     : 0 (0.00/second)
// GPU 0 DC6 Exit Reason - Render     : 0 (0.00/second)
// GPU 0 FPS                          : 0`
