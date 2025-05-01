import ComputerBuilder from './ComputerBuilder';
import Computer from './Computer';

/**
 * Concrete builder class for creating an office-use PC.
 * Implements the ComputerBuilder interface to build each component tailored for productivity tasks.
 */
class BudgetPCBuilder implements ComputerBuilder {
    private computer: Computer;

    /**
     * Initializes a new Computer instance to be configured for office use.
     */
    constructor() {
        this.computer = new Computer();
    }

    /**
     * Installs a processor suited for standard office workloads.
     * @returns {this} The builder instance for method chaining.
     */
    public buildProcessor(): this {
        this.computer.setProcessor("Intel Core i3-12100");
        return this;
    }

    /**
     * Uses integrated graphics suitable for basic visual tasks.
     * @returns {this} The builder instance for method chaining.
     */
    public buildGraphics(): this {
        this.computer.setGraphics("Integrated Intel UHD Graphics 730");
        return this;
    }

    /**
     * Installs enough memory for typical office multitasking.
     * @returns {this} The builder instance for method chaining.
     */
    public buildMemory(): this {
        this.computer.setMemory("8GB DDR4");
        return this;
    }

    /**
     * Installs a reliable SSD for responsive application performance.
     * @returns {this} The builder instance for method chaining.
     */
    public buildDisk(): this {
        this.computer.setDisk("512GB SATA SSD");
        return this;
    }

    /**
     * Installs a mainstream operating system for office environments.
     * @returns {this} The builder instance for method chaining.
     */
    public buildOperatingSystem(): this {
        this.computer.setOperatingSystem("Windows 10 Home");
        return this;
    }

    /**
     * Returns the fully constructed Computer object configured for office use.
     * @returns {Computer} The configured Computer instance.
     */
    public getResult(): Computer {
        return this.computer;
    }
}

export default BudgetPCBuilder;
