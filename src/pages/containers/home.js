import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../../pages/components/related';
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/components/modal.js';
import Error from '../../errores/containers/error';
import VideoPlayer from '../../player/containers/video-player-container';
class Home extends Component {
    state={
        modalVisible: false,
    }
    abrirModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        });
    }
    cerrarModal = (event)=>{
        this.setState({
            modalVisible: false
        });
    }
    render(){
        return(
            <Error>
                <HomeLayout>
                    <Related/>
                    <Categories 
                        categories = {this.props.data.categories}
                        abrirModal = {this.abrirModal}/>
                    {
                        this.state.modalVisible &&
                        <ModalContainer> 
                            <Modal cerrar={this.cerrarModal}>
                                <VideoPlayer
                                    src = { this.state.media.src } 
                                    title = { this.state.media.title }/>
                            </Modal>
                        </ModalContainer>
                        
                    }
                    
                </HomeLayout>
            </Error>
        )
    }
}

export default Home;