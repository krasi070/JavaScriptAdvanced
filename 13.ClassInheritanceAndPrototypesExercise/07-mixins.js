function mixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        };
        
        return classToExtend;
    }
    
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer == this.keyboard.manufacturer &&
                this.keyboard.manufacturer == this.monitor.manufacturer;
        };

        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 &&
                (this.color.toLowerCase() == 'silver' || this.color.toLowerCase() == 'black') &&
                this.weight < 3;
        };

        return classToExtend;
    }

    return {
        computerQualityMixin,
        styleMixin
    };
}