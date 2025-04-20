
export default class ImageInserter {
    constructor(imagePath, targetClass) {
        this.imagePath = imagePath;
        this.targetElements = document.getElementsByClassName(targetClass);
    }

    insert() {
        for (let i = 0; i < this.targetElements.length; i++) {
            this.targetElements[i].style.backgroundImage = `url(${this.imagePath})`;
        }
    }


    changeImage(newImagePath) {
        this.imagePath = newImagePath;
        this.insert();
    }
}