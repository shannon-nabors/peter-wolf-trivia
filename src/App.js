import React, {Fragment} from 'react'
import Picture from './Picture'
import {Image, Container} from 'semantic-ui-react'

class App extends React.Component {

    instruments = [
        {id: 1, name: 'Bassoon', image: "https://classicalvoiceamerica.org/wp-content/uploads/2014/06/McGill-300.jpg", sound: "//upload.wikimedia.org/score/3/o/3ot6rvry9gpwn9zcon9tgw1kca47lpc/3ot6rvry.ogg"},
        {id: 2, name: 'Flute', image: "https://cyso.org/wp-content/uploads/2018/09/40148908990_4f16e2f906_o-300x300.jpg", sound: "//upload.wikimedia.org/score/5/s/5secz8jlug4almld8qmd4tbo031tg6c/5secz8jl.ogg"},
        {id: 3, name: 'French Horn', image: "https://s3.us-east-2.amazonaws.com/umb-media-library/media/1161946/auditions-page.jpg", sound: "//upload.wikimedia.org/score/6/k/6km17q3s6rp3bndiae4wznyupecmocl/6km17q3s.ogg"},
        {id: 4, name: 'Strings', image: "https://www.carmelsymphony.org/wp-content/themes/yootheme/cache/jesse-hawkins-2017-91524b67.jpeg", sound: "//upload.wikimedia.org/score/3/z/3z6kmcepcpj2jl1fzvefp2xxm1gi8qc/3z6kmcep.ogg"},
        {id: 5, name: 'Trumpet', image: "https://americanhistory.si.edu/sites/default/files/Tom%20Williams.jpg", sound: "//upload.wikimedia.org/score/g/b/gbtxq34afgqiywqzxo56t98hfoq5l39/gbtxq34a.ogg"},
        {id: 6, name: 'Oboe', image: "https://www.asmf.org/wp-content/uploads/2015/04/Rachel-Ingleton-280x280.jpg", sound: "//upload.wikimedia.org/score/8/3/838z759dbub95olikaz3eoikphf05we/838z759d.ogg"},
        {id: 7, name: 'Clarinet', image: "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/300x_a1-1_cTC/rusinek-goeres-1559882166.jpg", sound: "//upload.wikimedia.org/score/2/f/2fo81c8dh0sibei9w7q7j8paapmg4i0/2fo81c8d.ogg"}
    ]

    characters = [
        {id: 8, name: 'Peter'},
        {id: 9, name: 'Grandfather'},
        {id: 10, name: 'Duck'},
        {id: 11, name: 'Bird'},
        {id: 12, name: 'Cat'},
        {id: 13, name: 'Wolf'},
        {id: 14, name: 'Hunters'}
    ]

    getImage = (name) => {
        return `./${name.toLowerCase()}.png`
    }

    render() {
        return (
            <Fragment>
                <div className="page-header">
                    <img src={require('../public/images/tree-overlay-left.png')} className="header-image" id="left-overlay"/>
                    <div className="title">
                        <img className="header-image" src={require('../public/images/alt-title.png')}/>
                        {/* Peter and the Wolf */}
                        </div>
                    <img src={require('../public/images/tree-overlay-right.png')} className="header-image" id="right-overlay"/>
                </div>
                <div>
                    <div id="picset">
                        <div className='pic-area'>
                            {this.characters.map(char => {
                                return <Picture key={char.id} id={char.id} name={char.name}/>
                            })}
                        </div>
                        <div className='pic-area'>
                            {this.instruments.map(i => {
                                return <Picture key={i.id} id={i.id} image={i.image} sound={i.sound} name={i.name}/>
                            })}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default App