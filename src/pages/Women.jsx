import React, { useState, useEffect } from 'react';
import '../styles/Women.css';
import womenImage from '../assets/women.avif'; // Import the image
import women2Image from '../assets/women2.avif';
import women3Image from '../assets/women3.avif';
import womenProduct from '../assets/womenproduct.avif';
import WomenProduct from '../components/WomenProduct';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample products data
const womenProducts = [
  {
    id: 1,
    name: 'Túi Capucines MM',
    image: womenProduct
  },
  {
    id: 2,
    name: 'Túi Capucines BB',
    image: womenProduct
  },
  {
    id: 3,
    name: 'Túi Capucines Mini',
    image: womenProduct
  },
  {
    id: 4,
    name: 'Túi Capucines PM',
    image: womenProduct
  },
  {
    id: 5,
    name: 'Túi Capucines GM',
    image: womenProduct
  },
  {
    id: 6,
    name: 'Túi Capucines PM Plus',
    image: womenProduct
  },
  {
    id: 7,
    name: 'Túi Capucines BB Mini',
    image: womenProduct
  },
  {
    id: 8,
    name: 'Túi Capucines MM Plus',
    image: womenProduct
  }
];

const Women = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 50,
      mirror: true,
      anchorPlacement: 'top-bottom',
      easing: 'ease-in-out',
      disable: 'mobile'
    });

    // Refresh AOS on scroll
    window.addEventListener('scroll', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        AOS.refresh();
      });
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % womenProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + womenProducts.length) % womenProducts.length);
  };

  return (
    <div className="women-container">
      <div className="women-content">
        <img src={womenImage} alt="Women" data-aos="fade-up" />
        <div className="text-content" data-aos="fade-right" data-aos-delay="200">
          <h1>Túi Capucines</h1>
          <p>
            Được đặt tên theo con đường Rue Neuve-des-Capucines ở Paris,
            nơi Louis Vuitton mở cửa hàng đầu tiên vào năm 1854, túi Capucines
            là biểu tượng của vẻ đẹp thanh lịch vượt thời gian và bí thuật chế tác
            thủ công lâu đời của Maison, với màu sắc và kích thước đa dạng
            cùng tính ứng dụng cao.
          </p>
          <p className="availability">
            Chỉ có tại các cửa hàng chính thức hoặc liên hệ Trung tâm tư vấn
            Khách hàng của Louis Vuitton.
          </p>
          <div className="button-group" data-aos="fade-right" data-aos-delay="400">
            <button className="store-button">Tìm cửa hàng</button>
            <button className="contact-button">Liên hệ với Chuyên viên tư vấn</button>
          </div>
        </div>

        <div className="women-products-grid">
          {womenProducts.map((product, index) => (
            <div key={product.id} data-aos="fade-left" data-aos-delay={index * 100}>
              <WomenProduct {...product} />
            </div>
          ))}
        </div>
        
        <div className="view-more-container" data-aos="fade-left">
          <button className="view-more-button">Xem thêm</button>
        </div>

        <div className="women2-container">
          <img src={women2Image} alt="Women Collection" className="women2-image" data-aos="fade-up" />
        </div>

        <div className="split-section">
          <div className="left-section">
            <img src={women3Image} alt="Women Collection" className="women3-image" data-aos="fade-up" />
          </div>
          <div className="right-section" data-aos="fade-up">
            <div className="slider-container">
              <button className="slider-button prev" onClick={prevSlide}>
                <IoIosArrowBack />
              </button>
              <div className="slider-content">
                <WomenProduct {...womenProducts[currentSlide]} />
              </div>
              <button className="slider-button next" onClick={nextSlide}>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>

        <div className="craftsmanship-section">
          <h2 className="craftsmanship-title" data-aos="fade-right">Bí thuật chế tác</h2>
          <p className="craftsmanship-description" data-aos="fade-right" data-aos-delay="200">
            Vượt qua khỏi giới hạn của một món phụ kiện bằng da, túi Capucines 
            là hiện thân của sự khéo léo và tài nghệ vô song. Đằng sau thiết kế 
            tinh giản của túi Capucines là cả quá trình sáng tạo phức tạp và tay 
            nghề thủ công đỉnh cao: mỗi chiếc túi có thể cần đến 250 bước chế 
            tác tỉ mỉ và chỉ được thực hiện bởi những nghệ nhân giàu kinh 
            nghiệm nhất của Louis Vuitton.
          </p>
          <div className="craftsmanship-image" data-aos="fade-up" data-aos-delay="400">
            <img src={womenProduct} alt="Craftsmanship" />
          </div>
        </div>

        <div className="store-discovery-section">
          <h2 className="store-discovery-title" data-aos="fade-right">
            Khám phá túi Capucines tại cửa hàng
          </h2>
          <p className="store-discovery-description" data-aos="fade-right" data-aos-delay="200">
            Túi Capucies hiển trưng tại các cửa hàng Louis Vuitton đều được 
            tuyển chọn tỉ mỉ để mang đến trải nghiệm độc đáo cho quý khách. 
            Vui lòng liên hệ với Chuyên viên tư vấn khách hàng để đặt lịch hẹn 
            hoặc cập nhật thêm thông tin về sản phẩm.
          </p>
          <div className="store-discovery-buttons" data-aos="fade-right" data-aos-delay="400">
            <button className="store-finder-button">Tìm cửa hàng</button>
            <button className="contact-advisor-button">Liên hệ với Chuyên viên tư vấn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;