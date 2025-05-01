/**
 * Represents a computer with components such as processor, graphics, memory, disk, and operating system.
 * Provides methods to set the components of the computer.
 */
export default class Computer {
    private processor!: string;
    private graphics!: string;
    private memory!: string;
    private disk!: string;
    private operatingSystem!: string;

    /**
     * Sets the processor for the computer.
     * @param {string} processor The processor to be set.
     */
    setProcessor(processor: string): void {
        this.processor = processor;
    }

    /**
     * Sets the graphics card for the computer.
     * @param {string} graphics The graphics card to be set.
     */
    setGraphics(graphics: string): void {
        this.graphics = graphics;
    }

    /**
     * Sets the memory (RAM) for the computer.
     * @param {string} memory The amount and type of memory to be set.
     */
    setMemory(memory: string): void {
        this.memory = memory;
    }

    /**
     * Sets the disk (storage) for the computer.
     * @param {string} disk The disk type and size to be set.
     */
    setDisk(disk: string): void {
        this.disk = disk;
    }

    /**
     * Sets the operating system for the computer.
     * @param {string} operatingSystem The operating system to be set.
     */
    setOperatingSystem(operatingSystem: string): void {
        this.operatingSystem = operatingSystem;
    }
}