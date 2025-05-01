import ComputerBuilder from './ComputerBuilder';
import Computer from './Computer';

/**
 * Concrete builder class for creating a high-end gaming PC.
 * Implements the ComputerBuilder interface to build each component step-by-step.
 */
export default class GamingPCBuilder implements ComputerBuilder {
    private computer: Computer;

    /**
     * Initializes a new Computer instance to be configured.
     */
    constructor() {
        this.computer = new Computer();
    }

    /**
     * Installs a high-performance processor suitable for gaming.
     * @returns {this} The builder instance for method chaining.
     */
    public buildProcessor(): this {
        this.computer.setProcessor("AMD Ryzen 7 9800X3D");
        return this;
    }

    /**
     * Installs a powerful graphics card for high-end gaming.
     * @returns {this} The builder instance for method chaining.
     */
    public buildGraphics(): this {
        this.computer.setGraphics("NVIDIA GeForce RTX 3080");
        return this;
    }

    /**
     * Installs a large amount of memory to support gaming and multitasking.
     * @returns {this} The builder instance for method chaining.
     */
    public buildMemory(): this {
        this.computer.setMemory("64GB DDR4");
        return this;
    }

    /**
     * Installs a fast and spacious SSD for quick load times and ample storage.
     * @returns {this} The builder instance for method chaining.
     */
    public buildDisk(): this {
        this.computer.setDisk("2TB NVMe SSD");
        return this;
    }

    /**
     * Installs an operating system optimized for gaming.
     * @returns {this} The builder instance for method chaining.
     */
    public buildOperatingSystem(): this {
        this.computer.setOperatingSystem("Windows 11 Pro");
        return this;
    }

    /**
     * Returns the fully constructed Computer object.
     * @returns {Computer} The configured Computer instance.
     */
    public getResult(): Computer {
        return this.computer;
    }
}
