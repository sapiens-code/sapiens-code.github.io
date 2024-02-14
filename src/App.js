import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import ursinho_pandinha_ok from "./assets/ursinho_pandinha_ok.gif";
import ursinho_estudando from "./assets/ursinho_estudando.gif";
import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
import pandinha_martelo from "./assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "./assets/ursinho_coracao.jpg";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "./assets/ursinhos_bebida.gif";
import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
import eddyS2Lidiane from "./assets/eddyS2Lidiane.jpeg";
import IMG_0430 from "./assets/IMG_0430.jpg";
import IMG_1458 from "./assets/IMG_1458.jpg";
import IMG_0069 from "./assets/IMG_0069.jpg";
import IMG_0491 from "./assets/IMG_0491.jpg";
import IMG_0795 from "./assets/IMG_0795.jpg";
import IMG_0891 from "./assets/IMG_0891.jpg";
import IMG_1137 from "./assets/IMG_1137.jpg";
import IMG_1232 from "./assets/IMG_1232.JPG";
import IMG_1247 from "./assets/IMG_1247.jpg";
import IMG_1275 from "./assets/IMG_1275.jpg";
import IMG_1290 from "./assets/IMG_1290.jpg";
import IMG_1993 from "./assets/IMG_1993.jpg";
import IMG_2218 from "./assets/IMG_2218.jpg";
import IMG_2255 from "./assets/IMG_2255.jpg";
import IMG_1889 from "./assets/IMG_1889.JPG";

const App = () => {

  return (
    <div className="main">
      <Screen
        imageUrl={ursinho_pandinha_ok}
        imageUrlMe={IMG_0430}
        bgColor={colors.red}
        textColor={colors.white}
        title="Hello em iu:3"
        text="nhân dịp valentine tụi mình ở xa qua nên anh làm cái web tặng em từ xa."
        btnText="bắt đầu"
        sequency="1"
      />
      <Screen
        imageUrl={ursinho_estudando}
        imageUrlMe={IMG_1458}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Đi chơi"
        text="đi vũng tàu kếm anh thiện soi:))"
        btnText="tiếp tục"
        sequency="2"
      />
      <Screen
        imageUrl={pandinha}
        imageUrlMe={IMG_0069}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Thảo cầm viên"
        text="lần đầu tiên đi thảo cầm viên. nhìn bé đầu đỏ giống con hổ ghê"
        btnText="tiếp tục"
        sequency="3"
      />
      <Screen
        imageUrl={ursinho_S2_pandinha}
        imageUrlMe={IMG_0891}
        bgColor={colors.red}
        textColor={colors.white}
        title="Đi bảo tàng"
        text="dắt đi bảo tàng xong về ám ảnh mấy ngày."
        btnText="tiếp tục"
        sequency="4"
      />
      <Screen
        imageUrl={ursinha_chorando}
        bgColor={colors.purple}
        imageUrlMe={IMG_1290}
        textColor={colors.white}
        title="nhộm tóc đi chơi"
        text="nhộm tóc đồ, thấy thương người yêu ghê không, vậy mà cứ bị chê."
        btnText="tiếp tục"
        sequency="5"
      />
      <Screen
        imageUrl={ursinho_chorando}
        imageUrlMe={IMG_1275}
        bgColor={colors.green}
        textColor={colors.white}
        title="Đi siêu thị nhật"
        text="đi vô siêu thị phá của người ta là chính chứ có mua gì đâu."
        btnText="tiếp tục"
        sequency="6"
      />
      <Screen
        imageUrl={pandinha_martelo}
        imageUrlMe={IMG_0491}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Đi ăn hột vịt lộn"
        text="xui quá đi ăn hôt vịt lộn xã xui, ai dè xui hơn:))"
        btnText="tiếp tục"
        sequency="7"
      />
      <Screen
        imageUrl={pandinha_brava}
        bgColor={colors.yellow}
        imageUrlMe={IMG_1137}
        textColor={colors.white}
        title="học tiêng anh"
        text="lâu lâu cũng giận dỗi đồ, mà tính ra lúc giận nhìn dể thương nên để cho giận luôn kkk."
        btnText="tiếp tục"
        sequency="8"
      />
      <Screen
        imageUrl={ursinho_catucando_pandinha}
        bgColor={colors.purple}
        imageUrlMe={IMG_1232}
        textColor={colors.white}
        title="Cháo ếch sing gá bò"
        text="khúc này bồ tui đẹp mà tui xấu quá, mà thôi kệ bồ đẹp là được hehe"
        btnText="tiếp tục"
        sequency="9"
      />
      <Screen
        imageUrl={ursinho_coracao}
        bgColor={colors.blue}
        textColor={colors.white}
        imageUrlMe={IMG_0795}
        title="ở nhà"
        text="khúc này không nhớ khúc nào luôn, mà thấy đẹp nên để dô"
        btnText="tiếp tục"
        sequency="10"
      />
      <Screen
        imageUrl={pandinha_coracao}
        bgColor={colors.yellow}
        textColor={colors.white}
        imageUrlMe={IMG_1889}
        title="lễ tốt nghiệp"
        text="cảm ơn em đã dự lễ tốt nghiệp của anh, bữa đó cầm bó bông bự quá nên hơi hoảng, tới lượt em phải cầm bó bự hơn mới được."
        btnText="tiếp tục"
        sequency="11"
      />
      <Screen
        imageUrl={ursinhos_apaixonados}
        bgColor={colors.red}
        textColor={colors.white}
        imageUrlMe={IMG_1993}
        title="Đi xem phim"
        text="cảm ơn em đã yêu anh tới hôm nay, năm sau yêu tiếp nhá"
        btnText="tiếp tục"
        sequency="12"
      />
      <Screen
        imageUrl={ursinhos_caminhada}
        bgColor={colors.pink}
        imageUrlMe={IMG_2218}
        textColor={colors.white}
        title="đi chơi xa"
        text="cô năm chèo với chú ba hy đi bắt cá lóc..."
        btnText="tiếp tục"
        sequency="13"
      />
      <Screen
        imageUrl={ursinhos_fotinha}
        bgColor={colors.green}
        imageUrlMe={IMG_1247}
        textColor={colors.white}
        title="2222222"
        text="đây là một trang web đơn giản anh tự làm nên hơi lâu với xấu xíu. còn 1 tuần nữa mới được gặp nhau. nhớ qué:(("
        btnText="tiếp tục"
        sequency="14"
      />
      <Screen
        imageUrl={ursinhos_bebida}
        bgColor={colors.purple}
        imageUrlMe={IMG_2255}
        textColor={colors.white}
        title="Kết"
        text="ngày lễ tình nhân chúc bé iu của anh điều tốt đẹp nhất. anh không ở kế tặng quà hay hoa được, em đừng buồn nhá. yêu em nhiều nhiều 💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕"
        btnText="hết gòi"
        sequency="15"
      />
    </div>
  );
};

export default App;
