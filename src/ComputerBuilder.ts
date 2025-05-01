import Computer from './Computer';

/**
 * Interface that defines the methods required for building a computer.
 * Concrete builders should implement this interface to provide step-by-step construction of computer components.
 */
export default interface ComputerBuilder {
    /**
     * Builds and sets the processor for the computer.
     * @returns {this} The builder instance for method chaining.
     */
    buildProcessor(): this;

    /**
     * Builds and sets the graphics card for the computer.
     * @returns {this} The builder instance for method chaining.
     */
    buildGraphics(): this;

    /**
     * Builds and sets the memory (RAM) for the computer.
     * @returns {this} The builder instance for method chaining.
     */
    buildMemory(): this;

    /**
     * Builds and sets the disk (storage) for the computer.
     * @returns {this} The builder instance for method chaining.
     */
    buildDisk(): this;

    /**
     * Builds and sets the operating system for the computer.
     * @returns {this} The builder instance for method chaining.
     */
    buildOperatingSystem(): this;

    /**
     * Returns the final built computer object.
     * @returns {Computer} The fully constructed Computer instance.
     */
    getResult(): Computer;
}
