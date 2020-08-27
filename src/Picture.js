import React from 'react'
import {Image} from 'semantic-ui-react'

class Picture extends React.Component {

    playSound = () => {
        let audio = new Audio(this.props.sound)
        audio.play()
    }

    getImage = (name) => {
        return `./${name.toLowerCase()}.png`
    }

    images = {
        1: require('../public/images/bassoon.png'),
        2: require('../public/images/flute.png'),
        3: require('../public/images/french-horn.png'),
        4: require('../public/images/strings.png'),
        5: require('../public/images/trumpet.png'),
        6: require('../public/images/oboe.png'),
        7: require('../public/images/clarinet.png'),
        8: require('../public/images/new-peter.png'),
        9: require('../public/images/new-grandpa.png'),
        10: require('../public/images/new-duck.png'),
        11: require('../public/images/new-bird.png'),
        12: require('../public/images/new-cat.png'),
        13: require('../public/images/new-wolf.png'),
        14: require('../public/images/new-hunters.png')
    }

    render() {
        let {id, name, image, sound} = this.props
        return (
            <div className={`pic-container ${sound ? "with-sound" : 'without-sound'}`}
                onClick={sound ? this.playSound : null}
            >
                <div className="overlay">
                    <div className="text">{name.toUpperCase()}</div>
                </div>
                <img
                    src={this.images[id]}
                    className="image"
                ></img>
            </div>
        )
    }
}

export default Picture