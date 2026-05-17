const PROFILE_DATA = {
    name: "Kevin Flynn",
    title: "Embedded Systems & Kernel Engineer",
    resumeLink: "https://github.com/kevin-825/kevin-resume/releases/download/latest/Kevin_Aimaier_CV.pdf", // Remember to keep this a "clean" PDF
    
    research: [
        {
            topic: "CPU Architecture",
            description: "Deep dive into RISC-V (PMP/PLIC/APLIC) and ARM (MPU/GIC/NVIC). Low-level assembly and bootloader dev."
        },
        {
            topic: "Memory Management",
            description: "Kernel internals: SLAB/SLUB allocators, virtual memory mapping, and TLSF (Two-Level Segregated Fit) for RTOS."
        },
        {
            topic: "Interrupts & Exceptions",
            description: "Implementing and debugging GIC (ARM) and APLIC/PLIC (RISC-V) interrupt controllers in simulation and hardware."
        }
    ],

    // Modularized Projects: Grouped by the Naming Policy
    projectGroups: [
        {
            category: "Kernel & Systems (C/ASM)",
            items: [
                { 
                    repo: "sys-qemu-rtos", 
                    name: "QemuRTOS", 
                    desc: "Custom RTOS with mutex/semaphore APIs and deterministic scheduling." 
                },
                { 
                    repo: "sys-qemu-embedded-linux", 
                    name: "QemuEmbeddedLinux", 
                    desc: "Full-stack simulation for testing Linux drivers and kernel modules." 
                },
                { 
                    repo: "drv-arm-gic", 
                    name: "GIC Driver", 
                    desc: "Low-level driver implementation for ARM Generic Interrupt Controllers." 
                }
            ]
        },
        {
            category: "Tooling & Automation (Bash/Python)",
            items: [
                { 
                    repo: "tool-json-template-resolver", 
                    name: "JSON Resolver", 
                    desc: "Recursive variable resolution for complex build configurations." 
                },
                { 
                    repo: "sys-bash-exception-core", 
                    name: "Exception Engine", 
                    desc: "Multi-process bash exception handling with data-passing capability." 
                }
            ]
        }
    ],

    history: [
        {
            date: "2024 - Present",
            role: "Embedded Linux Engineer",
            details: "Focusing on driver development, kernel internals (LFD420/LFD435), and HAL design."
        }
    ]
};