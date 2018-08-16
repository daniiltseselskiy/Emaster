import React , { Component } from 'react'
import GameSupport from '../../components/GameSupport'
import JoinCompetition from '../../components/JoinCompetition'
import Support3Text from '../../components/Support3Text'
import ImageTitleComponent from '../../components/ImageTitleComponent'
import './index.css'
import '../index.css'
import {
    Label,
    Button,
} from 'reactstrap'
import TournamentImage from '../../assets/images/features/tournament.png'
import RealMoneyImage from '../../assets/images/features/real-money.png'
import ProtectionImage from '../../assets/images/features/protection.png'
import { labels } from '../../constants/labels'
import { tournamentLeague, realMoney, safeSecure } from '../../constants/content'
class Features extends Component {
    render () {
        
        return (
            <div className="features-container">
                <div className="text-content-t">
                    <Label className="text-title">{labels.featuresTitle}</Label>
                </div>
                <Support3Text />
                <GameSupport />
                <ImageTitleComponent label={tournamentLeague.label} content1={tournamentLeague.content1} content2={tournamentLeague.content2} image={TournamentImage}  />
                <ImageTitleComponent label={realMoney.label} content1={realMoney.content1} content2={realMoney.content2} image={RealMoneyImage} reverse={true} />
                <ImageTitleComponent label={safeSecure.label} content1={safeSecure.content1} content2={safeSecure.content2} image={ProtectionImage}  />
                <JoinCompetition />
            </div>
        )
    }
}

export default Features