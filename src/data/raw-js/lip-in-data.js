const LIP_IN_DATA = [
    {
      id: 1,
      title: 'Church',
      routeName: 'church',
      items: [
        {
          id: 1,
          name: 'Every Nation Park',
          site: 'https://www.everynationtshwane.org',
          imageUrl: 'https://www.everynationtshwane.org/wp-content/uploads/2018/10/EN-LOGO_Tshwane_Blue-1.png',
          amount: 25,
          bank: {
            name: 'FNB',
            account: '6287 4692 067',
            type: 'Savings',
            branch: '210 554' 
          }
        },
        {
          id: 2,
          name: 'Christ Life Ministries',
          site: 'http://www.christlife.co.za/',
          imageUrl: 'http://www.christlife.co.za/wp-content/uploads/2019/05/Logo_colourv2.png',
          amount: 25,
          bank: {
            name: 'FNB',
            account: '626 5470 6062',
            type: 'Cheque',
            branch: '252 045' 
          }
        },
        {
          id: 3,
          name: 'Hatfield Christian Church',
          site: 'https://www.hatfield.co.za/',
          imageUrl: 'https://www.hatfield.co.za/wp-content/uploads/2018/07/HCC-logo.png.webp',
          amount: 25,
          bank: {
            name: 'Standard Bank',
            account: '011 981 679',
            type: 'Current',
            branch: '011 545' 
          }
        },
        {
          id: 4,
          name: 'Seventh-Day Adventist Church',
          site: 'https://www.pessdachurch.org',
          imageUrl: 'https://static.wixstatic.com/media/eb6fdb_167016a0f3c14b0992dcfe057e86bac6~mv2.png/v1/fill/w_401,h_105,al_c,q_85,usm_0.66_1.00_0.01/adventist-en--ming.webp',
          amount: 25,
          bank: {
            name: 'Standard Bank',
            account: '410 928 968',
            type: 'Current',
            branch: '051 001' 
          }
        },
        {
          id: 5,
          name: 'Lynnwood Baptist Church',
          site: 'https://lynnwoodbaptistchurch.co.za/',
          imageUrl: 'https://lynnwoodbaptistchurch.co.za/wp-content/uploads/2015/07/weblogo1.gif',
          amount: 25,
          bank: {
            name: 'Standard Bank',
            account: '310 197 120',
            type: 'Current',
            branch: '012 445' 
          }
        },
        {
          id: 6,
          name: 'Gateway Family Church',
          site: 'http://gatewayfamilychurch.co.za/',
          imageUrl: 'http://gatewayfamilychurch.co.za/wp-content/uploads/2017/06/Logo-Trimmed.jpg',
          amount: 25,
          bank: {
            name: 'FNB',
            account: '6270 1656 300',
            type: 'Cheque',
            branch: '252 045' 
          }
        },
        {
          id: 7,
          name: 'Willows Church',
          site: 'https://www.willows.org.za/',
          imageUrl: 'https://www.willows.org.za/images/logo_final.png',
          amount: 25,
          bank: {
            name: 'FNB',
            account: '551 518 906 10',
            type: 'Cheque',
            branch: 'XXX' 
          }
        },
        {
          id: 8,
          name: 'Christian Revival Church',
          site: 'https://crcchurch.com',
          imageUrl: 'https://crcchurch.com/assets/img/brand/logo-white.png',
          amount: 25,
          bank: {
            name: 'ABSA',
            account: '9096 7111 39',
            type: 'Cheque',
            branch: '632 005' 
          }
        },
        {
          id: 9,
          name: 'Emmanuel Presbyterian Church',
          site: 'https://emmanuel.org.za/',
          imageUrl: 'https://emmanuel.org.za/wp-content/uploads/2019/08/Emmanuel-Logo-1-1.png',
          amount: 25,
          bank: {
            name: 'ABSA',
            account: '3490 1591 33',
            type: 'Current',
            branch: '632 005' 
          }
        },
      ]
    },
    {
      id: 2,
      title: 'Sneakers',
      routeName: 'sneakers',
      items: [
        {
          id: 1,
          name: 'Adidas NMD',
          imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
          amount: 220
        },
        {
          id: 2,
          name: 'Adidas Yeezy',
          imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
          amount: 280
        },
        {
          id: 3,
          name: 'Black Converse',
          imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
          amount: 110
        },
        {
          id: 4,
          name: 'Nike White AirForce',
          imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
          amount: 160
        },
        {
          id: 5,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          amount: 160
        },
        {
          id: 6,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 7,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 8,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Jackets',
      routeName: 'jackets',
      items: [
        {
          id: 1,
          name: 'Black Jean Shearling',
          imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
          price: 125
        },
        {
          id: 2,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 3,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 4,
          name: 'Brown Shearling',
          imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
          price: 165
        },
        {
          id: 5,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Womens',
      routeName: 'womens',
      items: [
        {
          id: 1,
          name: 'Blue Tanktop',
          imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
          price: 25
        },
        {
          id: 2,
          name: 'Floral Blouse',
          imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
          price: 20
        },
        {
          id: 3,
          name: 'Floral Dress',
          imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
          price: 80
        },
        {
          id: 4,
          name: 'Red Dots Dress',
          imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
          price: 80
        },
        {
          id: 5,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 6,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 7,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Mens',
      routeName: 'mens',
      items: [
        {
          id: 1,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 325
        },
        {
          id: 2,
          name: 'Floral T-shirt',
          imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
          price: 20
        },
        {
          id: 3,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 25
        },
        {
          id: 4,
          name: 'Pink T-shirt',
          imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
          price: 25
        },
        {
          id: 5,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 6,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ]

  export default LIP_IN_DATA;