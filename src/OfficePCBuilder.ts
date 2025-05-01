import ComputerBuilder from './ComputerBuilder';
import Computer from './Computer';

/**
 * Concrete builder class for creating a modern office PC with balanced performance.
 * Implements the ComputerBuilder interface to assemble the system step-by-step.
 */
export default class OfficePCBuilder implements ComputerBuilder {
    private computer: Computer;

    /**
     * Initializes a new Computer instance to be configured for office tasks.
     */
    constructor() {
        this.computer = new Computer();
    }

    /**
     * Installs a mid-range processor suitable for productivity and multitasking.
     * @returns {this} The builder instance for method chaining.
     */
    public buildProcessor(): this {
        this.computer.setProcessor("Intel Core i5-12400");
        return this;
    }

    /**
     * Uses integrated graphics sufficient for general office applications.
     * @returns {this} The builder instance for method chaining.
     */
    public buildGraphics(): this {
        this.computer.setGraphics("Integrated Intel UHD Graphics 730");
        return this;
    }

    /**
     * Installs enough memory for smooth multitasking in an office environment.
     * @returns {this} The builder instance for method chaining.
     */
    public buildMemory(): this {
        this.computer.setMemory("16GB DDR4");
        return this;
    }

    /**
     * Installs a large-capacity SSD to provide both speed and storage space.
     * @returns {this} The builder instance for method chaining.
     */
    public buildDisk(): this {
        this.computer.setDisk("1TB SATA SSD");
        return this;
    }

    /**
     * Installs a modern operating system tailored for business use.
     * @returns {this} The builder instance for method chaining.
     */
    public buildOperatingSystem(): this {
        this.computer.setOperatingSystem("Windows 11 Home");
        return this;
    }

    /**
     * Returns the fully assembled Computer configured for office use.
     * @returns {Computer} The configured Computer instance.
     */
    public getResult(): Computer {
        return this.computer;
    }
}
