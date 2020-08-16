import React from 'react';
import '../asset/footer.scss'
import { SocialIcon } from 'react-social-icons';

class Footer extends React.Component{

    render(){
        return (
            <footer>
                <div className="foot1">
                    <div>
                        <p>SUIVEZ-NOUS</p>
                        <span className="iconify" data-icon="fa-brands:facebook-f" data-inline="false"></span>
                <span className="iconify" data-icon="codicon:twitter" data-inline="false"></span>
                <span className="iconify" data-icon="dashicons:instagram" data-inline="false"></span>
                <span className="iconify" data-icon="ri:youtube-line" data-inline="false"></span>
                    </div>
                    <div>
                        <p>AUSSI SUR MOBILE</p>
                        <span className="iconify" data-icon="ic:outline-android" data-inline="false"></span>
                        <span className="iconify" data-icon="ant-design:apple-outlined" data-inline="false"></span>
                        <p>CinéLim's© 2008 - 2020</p>
                    </div>
                    <div>
                        <p>Retrouvez tous les horraires et infos de votre cinema sur le numero CinéLim's: +243813015090 (0,11$/minute)</p>
                    </div>
                    <div>
                        <p>THE BOXOFFICE WEBMEDIA GROUP</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
