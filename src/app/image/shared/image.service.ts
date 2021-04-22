import {Injectable} from '@angular/core';


@Injectable()
export class ImageService
{
    visibleImages: any[] = [];
    getImages()
    {
        return this.visibleImages = IMAGES.slice(0);
    }
    getImage(id: number)
    {
        return IMAGES.slice(0).find(Image => Image.id == id);
    }
}


const IMAGES = [

    {"id": 1,  "websitename": "7thgenhonda.com", "carmodel":"Civic", "picturedate":"123456","url":"assets/img/0a2d7013-ee26-4051-9595-522a84d08cb0.jpg"}


]
