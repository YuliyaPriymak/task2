import React, {Component} from 'react';
import './OpenImg.scss'

class OpenImg extends Component {

    render() {
        const {closeImg, imgSrc} = this.props;
        return (
            <div>
                {!imgSrc && <div>Loading...</div>}
                {!!imgSrc && (
                    <div className='modal-desc'>
                        <div className='modal-box'>
                            <div className='d-flex justify-content-end'>
                                <button
                                    className='d-block btn btn-primary'
                                    onClick={closeImg}>close
                                </button>
                            </div>
                            <div className='d-flex'>
                                <img src={imgSrc} alt="image"></img>
                            </div>

                        </div>
                    </div>
                )}
            </div>

        );
    }
}

export default OpenImg;