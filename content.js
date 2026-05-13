const PROFILE_DATA = {
    name: "Kevin Flynn",
    title: "Embedded Systems & Kernel Engineer",
    resumeLink: "resume.pdf",
    
    research: [
        {
            topic: "CPU Architecture",
            description: "Deep dive into RISC-V (PMP/PLIC/APLIC) and ARM (MPU/GIC/NVIC). Low-level assembly and bootloader dev."
        },
        {
            topic: "Memory Management",
            description: "Kernel internals: SLAB/SLUB allocators, virtual memory mapping, and TLSF for RTOS."
        }
    ],

        // ... basic info ...
    projectCategories: [
        {
            title: "Kernel & Systems (C/ASM)",
            repos: ["sys-qemu-rtos", "sys-qemu-embedded-linux", "drv-arm-gic"]
        },
        {
            title: "Tooling & Automation (Bash/Python)",
            repos: ["tool-json-template-resolver", "tool-build-scripts"]
        }
    ],
    projects: [
        {
            name: "QemuEmbeddedLinux",
            desc: "Full-stack simulation for testing Linux drivers and kernel modules without hardware."
        },
        {
            name: "QemuRTOS",
            desc: "Custom RTOS focusing on synchronization primitives and deterministic scheduling on RISC-V."
        }
    ],

    history: [
        {
            date: "2024 - Present",
            role: "Embedded Linux Engineer",
            details: "Driver development, kernel porting, and HAL design."
        }
    ]
    
};