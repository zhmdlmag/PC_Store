import {Post} from './models';

export const POSTS: Post[] = [
  {
    id: 1, title: 'NVIDIA GEFORCE RTX 3070',
    body: '\n' +
      '    Cooling System: Fan\n' +
      '    Boost Clock Speed: 1.73 GHz\n' +
      '    GPU Memory Size: 8 GB\n',
    img_url: 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3070.png',
    rating: 4, price: 499.99
  },
  {
    id: 2, title: 'NVIDIA GEFORCE RTX 3060 Ti',
    body: '\n' +
      '    Cooling System: Fan\n' +
      '    Boost Clock Speed: 1.67 GHz\n' +
      '    GPU Memory Size: 8 GB\n',
    img_url: 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3060-ti.png',
    rating: 4, price: 399.99
  },
  {
    id: 3, title: 'NVIDIA GEFORCE RTX 3080',
    body: '\n' +
      '    Cooling System: Fan\n' +
      '    Boost Clock Speed: 1.71 GHz\n' +
      '    GPU Memory Size: 10 GB\n',
    img_url: 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3080.png',
    rating: 4, price: 699.99
  },
  {
    id: 4, title: 'NVIDIA GEFORCE RTX 3090',
    body: '\n' +
      '    Cooling System: Fan\n' +
      '    Boost Clock Speed: 1.70 GHz\n' +
      '    GPU Memory Size: 24 GB\n',
    img_url: 'https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3090.png',
    rating: 5, price: 1499.99,
  },
  {
    id: 5, title: 'Gigabyte GeForce RTX 3060 EAGLE 12G',
    body: '\n' +
      '    Cooling System: WINDFORCE 2X\n' +
      '    Boost Clock Speed: --\n' +
      '    GPU Memory Size: 12 GB\n',
    img_url: 'https://assets.nvidia.partners/images/png/GV-N3060EAGLE-12GD.png',
    rating: 2, price: 329.99
  },
  {
    id: 6, title: 'ZOTAC GAMING GeForce RTX 3060 Twin Edge',
    body: '\n' +
      '    Cooling System: IceStorm 2.0\n' +
      '    Boost Clock Speed: 1777 MHz\n' +
      '    GPU Memory Size: 12 GB\n',
    img_url: 'https://assets.nvidia.partners/images/png/zt-a30600e-10m.png',
    rating: 3, price: 329.99
  },
  {
    id: 7, title: 'Gigabyte GeForce RTX 3070 EAGLE 8G',
    body: '\n' +
      '    Cooling System: WINDFORCE 3X\n' +
      '    Boost Clock Speed: 1725 MHz\n' +
      '    GPU Memory Size: 8 GB\n',
    img_url: 'https://assets.nvidia.partners/images/png/GV-N3070EAGLE-8GD.png',
    rating: 3, price: 499.99
  },
  {
    id: 8, title: 'Zotac ZT-A30900D-10P graphics card',
    body: '\n' +
      '    Cooling System: Icestorm 2.0\n' +
      '    Boost Clock Speed: 1695 MHz\n' +
      '    GPU Memory Size: 24 GB\n',
    img_url: 'https://assets.nvidia.partners/images/png/DE_85807397_100516019_US.png',
    rating: 5, price: 1899.99
  },
];

export const cartItems: any[] = [];
