// to verify pls

export const statuses = [
  {
    id: 1,
    description: "In Queue",
  },
  {
    id: 2,
    description: "Processing",
  },
  {
    id: 3,
    description: "Accepted",
  },
  {
    id: 4,
    description: "Wrong Answer",
  },
  {
    id: 5,
    description: "Time Limit Exceeded",
  },
  {
    id: 6,
    description: "Compilation Error",
  },
  {
    id: 7,
    description: "Runtime Error (SIGSEGV)",
  },
  {
    id: 8,
    description: "Runtime Error (SIGXFSZ)",
  },
  {
    id: 9,
    description: "Runtime Error (SIGFPE)",
  },
  {
    id: 10,
    description: "Runtime Error (SIGABRT)",
  },
  {
    id: 11,
    description: "Runtime Error (NZEC)",
  },
  {
    id: 12,
    description: "Runtime Error (Other)",
  },
  {
    id: 13,
    description: "Internal Error",
  },
  {
    id: 14,
    description: "Exec Format Error",
  },
];

const testResponse = {
  "source_code": "I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBu\nYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxv\nLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=\n",
  "language_id": 52,
  "stdin": "SnVkZ2Uw\n",
  "expected_output": null,
  "stdout": "aGVsbG8sIEp1ZGdlMAo=\n",
  "status_id": 3,
  "created_at": "2023-09-30T21:00:10.089Z",
  "finished_at": "2023-09-30T21:00:12.067Z",
  "time": "0.004",
  "memory": 760,
  "stderr": null,
  "token": "6cf47bfa-b081-4b4c-a3f8-c45e9d6f4f98",
  "number_of_runs": 1,
  "cpu_time_limit": "5.0",
  "cpu_extra_time": "1.0",
  "wall_time_limit": "10.0",
  "memory_limit": 128000,
  "stack_limit": 64000,
  "max_processes_and_or_threads": 60,
  "enable_per_process_and_thread_time_limit": false,
  "enable_per_process_and_thread_memory_limit": false,
  "max_file_size": 1024,
  "compile_output": null,
  "exit_code": 0,
  "exit_signal": null,
  "message": null,
  "wall_time": "0.035",
  "compiler_options": null,
  "command_line_arguments": null,
  "redirect_stderr_to_stdout": false,
  "callback_url": null,
  "additional_files": null,
  "enable_network": false,
  "status": {
    "id": 3,
    "description": "Accepted"
  },
  "language": {
    "id": 52,
    "name": "C++ (GCC 7.4.0)"
  }
}
