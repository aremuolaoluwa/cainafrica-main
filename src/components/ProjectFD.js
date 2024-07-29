import React from 'react';
import {TopImage, TextWrapper, TopHeaderText, TopParaText, OverallWrapper, PostWrapper, PostHeader, PostParagraph, PostImage, MediaWrapper, SingleImage} from './StyledComponents.js';
import FoodDriveCover from '../images/ProjectsData/FoodDriveCover.png';
import FoodDrive from '../images/ProjectsData/FoodDrive.png';
import Toolbar from './Toolbar/Toolbar.js';
import projectsCover from '../images/ProjectsData/projectsCover.jpg';

const ProjectFD = (props) => {


    return(
        <div>
            <TopImage style={{backgroundImage: `url(${projectsCover})`, backgroundPosition:'center'}}>
                <Toolbar drawerClickHandler={props.drawerToggleClickHandler} />
                {props.sideDrawer}
                <TextWrapper>
                    <TopHeaderText>PROJECTS</TopHeaderText>
                    <TopParaText>“SMALL ACTS, WHEN MULTIPLIED BY MILLIONS OF PEOPLE, CAN TRANSFORM THE WORLD.” — HOWARD ZINN</TopParaText>
                </TextWrapper>
            </TopImage>
            <OverallWrapper>
                <PostWrapper>
                    <PostHeader>Monthly Food Drive: Feeding the Underprivileged</PostHeader>
                    <PostParagraph>
                        As part of our unwavering commitment to supporting underprivileged communities, we organize a monthly food drive aimed at alleviating hunger among those struggling to make ends meet. Currently, we are partnered with Sandra Duke Catering, a reputable catering service that shares our vision of providing relief to those in need.
                        <br /><br />
                        Since the inception of the program, we have reached over 288 individuals from 68 underprivileged families, highlighting the tangible impact of our efforts. Every month, we identify three individuals facing significant hardships and provide them with carefully selected food items designed to sustain them and alleviate their struggles.
                        <br /><br />
                        We believe everyone should have access to basic necessities like food, and we are dedicated to bridging this gap. Our gratitude extends to Sandra Duke Catering for their support, and we invite other stakeholders, organizations, and individuals to explore our various projects and programs at CAIN, all aimed at empowering the underprivileged and equipping them with the tools for success and a comfortable life.
                        <br /><br />
                        Join us today and help make a difference in the lives of those who need it the most.
                        <br /><br />
                    </PostParagraph>
                </PostWrapper>

                <MediaWrapper>
                    <SingleImage>
                        <PostImage src={`${FoodDriveCover}`} />
                        <i style={{padding: '1rem 0'}}>Food items given to the monthly food drive beneficiaires</i>
                    </SingleImage>
                    
                    <SingleImage>
                        <PostImage src={`${FoodDrive}`}/>
                        <i style={{padding: '1rem 0'}}>Some of the beneficiaries of the monthly food drive.</i>
                    </SingleImage>

                </MediaWrapper>
            </OverallWrapper>
            
        </div>
    )
}

export default ProjectFD;