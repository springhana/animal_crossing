import { IItem } from 'animal-crossing';

export const image = (image: IItem | undefined) => {
  if (!image) return '';

  if (image.image) {
    return image.image;
  } else if (image.storageImage) {
    return image.storageImage;
  } else if (image.closetImage) {
    return image.closetImage;
  } else if (image.variations && image.variations.length > 0) {
    if (image.variations[0].image) {
      return image.variations[0].image;
    } else if (image.variations[0].storageImage) {
      return image.variations[0].storageImage;
    } else {
      return image.variations[0].closetImage;
    }
  } else if (image.albumImage) {
    return image.albumImage;
  } else if (image.framedImage) {
    return image.framedImage;
  } else if (image.inventoryImage) {
    return image.inventoryImage;
  }
};
