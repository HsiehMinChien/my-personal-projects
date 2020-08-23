import React, { useState } from "react";
import Head from "next/head";
import { compose } from "redux";
import withApollo from "../lib/with-apollo";
import { withRedux } from "../lib/redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Paper from "../components/paper";
import AppBar from "../components/appbar";
import Drawer from "../components/drawer";
import "./style.styl";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnalysis, setIsAnalysis] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  function _renderAnalysis() {
    if (isAnalysis) {
      return (
        <Paper>
          <Typography>您的手機號碼：{phoneNumber}</Typography>
          <Divider />
          <Typography>
            解析：
            <br />
            有主見、目標。注意工作或感情上太付出而累垮自己。容易白忙一場。
            ＊容易壓力大、操勞而導致肩緊痠痛、 睡不好、嗜睡或失眠
          </Typography>
          <Divider />
          <Typography>
            數字磁場： <br />
            [91]：延年1 <br />
            [12]：絕命1 <br />
            [23]：禍害4 <br />
            [34]：延年3 <br />
            [456]：禍害3 <br />
            [67]：生氣2 <br />
            [78]：延年2
          </Typography>
        </Paper>
      );
    }
    return (
      <>
        <Typography variant="subtitle1" gutterBottom>
          當您申購電話、大哥大、車牌....等等，號碼確定時，即已注定您未來運勢，是好？是壞？是吉？或凶？一目了然，因此，千萬疏忽不得。數字號碼顯現吉凶禍福，若能進而轉號開運，則歧嶇鋪平，宏業大展。
        </Typography>
        <TextField
          id="outlined-basic"
          label="輸入您的手機號碼"
          variant="outlined"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </>
    );
  }
  return (
    <div className="number-analysis">
      <Head>
        <title>數字驗證網站</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <div>
        <AppBar title="手機數字磁場分析" onClickIconButton={setIsOpen} />
        <Drawer isOpen={isOpen} onClickListItem={setIsOpen} />
        <Grid container justify="center">
          <div className="phone">
            <div className="speaker">
              <div className="front-camera" />
            </div>
            <div className="screen">
              {_renderAnalysis()}
              <Button
                variant="contained"
                disabled={phoneNumber.length < 1}
                onClick={() => {
                  setIsAnalysis(!isAnalysis);
                  if (isAnalysis) setPhoneNumber("");
                }}
              >
                {isAnalysis ? "再度測試" : "馬上測試"}
              </Button>
            </div>
            <div className="home"></div>
          </div>
        </Grid>
        <footer>Version 2.5, Power by YPL.</footer>
      </div>
    </div>
  );
}

export default compose(withRedux, withApollo)(Home);
