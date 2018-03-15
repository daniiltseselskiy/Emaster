import React from 'react';
import downloadBanner from './assets/emasters_download.png';
import {BrowserView, MobileView, isBrowser, isMobile, deviceDetect} from 'react-device-detect';
import './styles.css';

var view = function(){
  let {translate} = this.props;

  const device = (deviceDetect().osName)?(deviceDetect().osName):(deviceDetect().os?deviceDetect().os:"");
  
  let href = ""
  if(device.toLowerCase().indexOf('mac')>-1){
    href = "http://files.emasters.com.br/downloads/beta/eMasters.dmg"
  }else if(device.toLowerCase().indexOf('windows')>-1){
    href = "http://files.emasters.com.br/downloads/beta/eMasters.exe"
  }else{
    href = ""
  }

	return (
		<div className="banner background content-center">
      <div className="responsive">
  			<div className="col-md-12 row">
          <div className="col-md-6">
          
            <BrowserView device={isBrowser}>
                <h3 className="contentText">{translate("download.button")} {device.toString()}</h3>
                <br/>
                <a className="downloadButtonWrapper cleanHref brand-button white button" href={href} target="_blank">
                  <span className="downloadButton brand-button-text">
                    {href?translate("download.downloadText"):"Coming Soon"}
                  </span>
                </a>
            </BrowserView>

            <MobileView device={isMobile}>
                <h3 className="contentText">{translate("download.notAvailable")}</h3>
            </MobileView>
          
          </div>
  				<div className="col-md-6">
            <img src={downloadBanner} className="responsive animated bounce downloadImg" />
          </div>
  			</div>
      </div>
		</div>
	)
}
export default view;
