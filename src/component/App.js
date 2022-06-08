import '../css/App.css';
import { Component } from 'react';
import MobileDevice from './MobileDevice.js'
import { Divider, Stack } from '@mui/material';
import { SketchPicker } from 'react-color';
import rgbHex from 'rgb-hex';

class App extends Component {
  state = {
    mainColor: "#000",
    secondaryColor: "#fff",
    accentColor: "#000",
    color1: "#000",
    color2: "#000",
    color3: "#000"
  }

  handleChangeComplete = (color) => {
    console.log(color.hsl.h)
    var accentRgb = (color.hsl.h < 40 || color.hsl.h >= 359) 
      ? this.hslToRgb(5, color.hsl.s, color.hsl.l - 0.1) 
      : this.hslToRgb(color.hsl.h - 45, color.hsl.s, color.hsl.l - 0.1)
    var secRgb = this.hslToRgb(color.hsl.h, 0.45, 0.98)
    this.setState({
      mainColor: "#"+rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a),
      secondaryColor: "#"+rgbHex(secRgb[0], secRgb[1], secRgb[2], color.rgb.a),
      accentColor: "#"+rgbHex(accentRgb[0], accentRgb[1], accentRgb[2], color.rgb.a),
      color1: this.randomColorHex(color.rgb.r, color.rgb.g, color.rgb.b),
      color2: this.randomColorHex(color.rgb.r, color.rgb.g, color.rgb.b),
      color3: this.randomColorHex(color.rgb.r, color.rgb.g, color.rgb.b)
    })
  }

  handleChange = (color, event) => {
    var accentRgb = (color.hsl.h < 40 || color.hsl.h >= 359) 
      ? this.hslToRgb(5, color.hsl.s, color.hsl.l - 0.1) 
      : this.hslToRgb(color.hsl.h - 45, color.hsl.s, color.hsl.l - 0.1)
    var secRgb = this.hslToRgb(color.hsl.h, 0.45, 0.98)
    this.setState({
      mainColor: "#"+rgbHex(color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a),
      secondaryColor: "#"+rgbHex(secRgb[0], secRgb[1], secRgb[2], color.rgb.a),
      accentColor: "#"+rgbHex(accentRgb[0], accentRgb[1], accentRgb[2], color.rgb.a),
      color1: this.randomColorHex(color.rgb.r, color.rgb.g, color.rgb.b),
      color2: this.randomColorHex(color.rgb.r, color.rgb.g, color.rgb.b),
      color3: this.randomColorHex(color.rgb.r, color.rgb.g, color.rgb.b)
    })
  }

  hslToRgb = (h, s, l) => {
    if (h < 0) {
      h = 0
    }
    let C = (1-Math.abs(2*l - 1))*s
    let X = C*(1-Math.abs((h/60)%2-1))
    let m = l - C/2

    if (0 <= h && h < 60) {
      return [(C+m)*255, (X+m)*255, m*255]
    }
    else if (60 <= h && h<120) {
      return [(X+m)*255, (C+m)*255, m*255]
    }
    else if (120 <= h && h<180) {
      return [m*255, (C+m)*255, (X+m)*255]
    }
    else if (180 <= h && h<240) {
      return [m*255, (X+m)*255, (C+m)*255]
    }
    else if (240 <= h && h<300) {
      return [(X+m)*255, m*255, (C+m)*255]
    }
    else if (300 <= h && h<360) {
      return [(C+m)*255, m*255, (X+m)*255]
    }
  }

  randomColorHex = (r,g,b,a) => {
    var red = Math.floor(Math.random()*256)
    var green = Math.floor(Math.random()*256)
    var blue = Math.floor(Math.random()*256)

    r = (r+red) / 2
    g = (g+green) / 2
    b = (b+blue) / 2

    return "#"+rgbHex(r, g, b, a)
  }

  render() {
    let {mainColor, secondaryColor, accentColor, color1, color2, color3} = this.state
    return <div className="App">
      <div className="color-content-body">
            <div className="color-picker-div">
              <div>
                <h4 style={{margin: "0"}}>Main Color</h4>
                  <div style={{width: "220px"}}>
                    <SketchPicker
                      color={mainColor}
                      onChangeComplete={this.handleChangeComplete}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              <div className="color-display-div">
                <Stack orientation="vertical" spacing={2}>
                  <div>
                    <h4 style={{margin: "0"}}>Main Color</h4>
                    <div className="color-block" style={{backgroundColor: mainColor}}>
                      {mainColor}
                    </div>
                  </div>
                  <div>
                    <h4 style={{margin: "0"}}>Accent Color</h4>
                    <div className="color-block" style={{backgroundColor: accentColor}}>
                      {accentColor}
                    </div>
                  </div>
                  <div>
                    <h4 style={{margin: "0"}}>Secondary Color</h4>
                    <div className="color-block" style={{backgroundColor: secondaryColor, color: 'black'}}>
                      {secondaryColor}
                    </div>
                  </div>
                </Stack>
              </div>
            </div>
            <Divider></Divider>
            <div className="color-scheme-div">
              <h3>Color Scheme</h3>
              <Stack direction="row" spacing={1} style={{position:"relative", left: "20%"}}>
                <div className='color-scheme-block' style={{backgroundColor: mainColor}}></div>
                <div className='color-scheme-block' style={{backgroundColor: color1}}></div>
                <div className='color-scheme-block' style={{backgroundColor: color2}}></div>
                <div className='color-scheme-block' style={{backgroundColor: color3}}></div>
              </Stack>
            </div>
        </div>
      <Divider orientation='vertical'></Divider>
      <div className="mobile-device-div">
        <Stack className="mobile-device-stack" direction={"row"} alignItems="center" justifyContent="center" spacing={3}>
          <MobileDevice 
            mainColor={mainColor} 
            secondaryColor={secondaryColor} 
            accentColor={accentColor}
            backgroundColor={mainColor}
            isSecondary={false}
          />
          <MobileDevice 
            mainColor={mainColor}
            secondaryColor={accentColor} 
            accentColor={secondaryColor}
            backgroundColor={secondaryColor}
            isSecondary={true}
          />
        </Stack>
      </div>
    </div>
  }
}

export default App;
