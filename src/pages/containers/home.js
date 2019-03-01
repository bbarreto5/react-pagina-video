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
    abrirModal = (event) => {
        this.setState({
            modalVisible: true
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
                    <VideoPlayer/>
                    <Categories 
                        categories = {this.props.data.categories}
                        abrirModal = {this.abrirModal}/>
                    {
                        this.state.modalVisible &&
                        <ModalContainer> 
                            <Modal cerrar={this.cerrarModal}>
                                <h1>hola viejo</h1>
                            </Modal>
                        </ModalContainer>
                        
                    }
                    
                </HomeLayout>
            </Error>
        )
    }
}

export default Home;