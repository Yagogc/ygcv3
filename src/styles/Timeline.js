import styled, { keyframes } from "react-emotion";

import Icon from "./Icon";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 10px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 25px;
    height: 100%;
    width: 4px;
    background: linear-gradient(90deg, #aa00de 0%, #ff5252 100%);
    background-position: center;
    background-size: 30px 100%;
  }
  @media (${props => props.theme.mq.desktop}) {
    &:after {
      left: 50%;
      margin-left: -2px;
    }
  }
`;

const animation = keyframes`
  0%,100% {
      transform: translateX(-50%) translatey(-50%) scale(1.0);
  }
  50% {
      transform: translateX(-50%) translatey(-50%) scale(0.5);
  }
`;

const Block = {
  Wrapper: styled.div`
    position: relative;
    margin: 2em 0;
    pointer-events: none;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
    @media (${props => props.theme.mq.desktop}) {
      :nth-child(even) {
        display: flex;
        flex-direction: row-reverse;
      }
    }
    @media (${props => props.theme.mq.desktop}) {
      margin: 4em 0;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:not(:first-child) {
        margin-top: -130px;
      }
      &:not(:last-child) {
        min-height: 130px;
      }
    }
  `,
  Disk: styled.div`
    position: absolute;
    top: 10px;
    left: 2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(
      90deg,
      rgb(170, 0, 222) 0%,
      rgb(255, 82, 82) 100%
    );
    background-size: 30px 100%;
    background-position: center;
    z-index: 10;

    @media (${props => props.theme.mq.desktop}) {
      width: 30px;
      height: 30px;
      left: 50%;
      margin-left: -15px;
    }

    &:before {
      content: "";
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      height: 20px;
      width: 20px;
      background: ${props => props.theme.color.ui2};
      border-radius: 50%;
      transform: translateX(-50%) translatey(-50%);
    }
    &:after {
      content: ${props => (props.present ? "''" : "none")};
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      height: 10px;
      width: 10px;
      background: linear-gradient(
        90deg,
        rgb(170, 0, 222) 0%,
        rgb(255, 82, 82) 100%
      );
      background-size: 30px 100%;
      background-position: center;
      border-radius: 50%;
      animation: ${animation} 1.5s ease-in-out infinite;
    }
  `,
  Card: styled.div`
    position: relative;
    margin-left: 50px;
    background: ${props => props.theme.color.ui3};
    padding: 10px;
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 10px;
    pointer-events: auto;

    @media (${props => props.theme.mq.desktop}) {
      color: white;
      margin-left: 0;
      padding: 10px;
      width: calc(50% - 30px);
    }
  `,
  Link: styled.a`
    color: ${props => props.theme.color.text1};
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
  `,
  LinkIcon: styled(Icon)``,
  Title: styled.h1`
    font-size: inherit;
    display: inline-block;
  `,
  Info: styled.div`
    font-size: 12px;
    display: grid;
    grid-gap: 5px;
    background: ${props => props.theme.color.ui4};
    padding: 5px 10px;

    @media (${props => props.theme.mq.mobile}) {
      grid-auto-rows: 1fr;
    }

    @media (${props => props.theme.mq.desktop}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  Role: styled.span``,
  RoleIcon: styled(Icon)``,
  Date: styled.span``,
  DateIcon: styled(Icon)``,
  StarDate: styled.span``,
  EndDate: styled.span``,
  Description: styled.p`
    text-align: justify;
    font-size: 14px;
    padding: 5px;
  `,
  TechList: styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-gap: 10px;
    font-size: 12px;
  `,
  TechItem: styled.li`
    list-style: none;
    text-align: center;
    background: ${props => props.theme.color.ui4};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
  `
};

/*
.cd-container {
  width: 90%;
  max-width: 1080px;
  margin: 20px auto;
  background: #2B343A;
  padding: 0 10%;
  border-radius: 2px;
}
.cd-container::after {
  content: '';
  display: table;
  clear: both;
}

/* -------------------------------- 
Main components 
-------------------------------- */

/*
#cd-timeline {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em;
}
#cd-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 25px;
  height: 100%;
  width: 4px;
  background: #7E57C2;
}
@media only screen and (min-width: 1170px) {
  #cd-timeline {
    margin-top: 3em;
    margin-bottom: 3em;
  }
  #cd-timeline::before {
    left: 50%;
    margin-left: -2px;
  }
}

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
}
.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-block:first-child {
  margin-top: 0;
}
.cd-timeline-block:last-child {
  margin-bottom: 0;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-block {
    margin: 4em 0;
  }
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
  .cd-timeline-block:not(:first-child) {
    margin-top: -130px;
  }
}

.cd-timeline-img {
  position: absolute;
  top: 8px;
  left: 12px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #7E57C2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
}
.cd-timeline-img {
  background: #673AB7;
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-img {
    width: 30px;
    height: 30px;
    left: 50%;
    margin-left: -15px;
    margin-top: 8.5px;
  }
}

.cd-timeline-content {
  position: relative;
  margin-left: 60px;
  margin-right: 30px;
  background: #333C42;
  border-radius: 2px;
  padding: 1em;
  .timeline-content-info {
    background: #2B343A;
    padding: 5px 10px;
    color: rgba(255,255,255,0.7);
    font-size: 12px;
    box-shadow:  inset 0 2px 0 rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    i {
      margin-right: 5px;
    }
    .timeline-content-info-title, .timeline-content-info-date {  
      width: calc(50% - 2px);
      display: inline-block;
    }
    @media (max-width: 500px) {
      .timeline-content-info-title, .timeline-content-info-date {  
        display: block;
        width:100%;
      } 
    }
  }
  .content-skills {
    font-size: 12px;
    padding:0;
    margin-bottom: 0;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      background: #40484D;
      border-radius: 2px;
      display: inline-block;
      padding: 2px 10px;
      color: rgba(255,255,255,0.7);
      margin: 2px 2px;
      text-align: center;
      flex-grow: 1;
    }
  }
}
.cd-timeline-content:after {
  content: "";
  display: table;
  clear: both;
}
.cd-timeline-content h2 {
  color: rgba(255,255,255,.9);
  margin-top:0;
  margin-bottom: 10px;
}
.cd-timeline-content p, .cd-timeline-content .cd-date {
  color: rgba(255,255,255,.7);
  font-size: 13px;
  font-size: 0.8125rem;
}
.cd-timeline-content .cd-date {
  display: inline-block;
}
.cd-timeline-content p {
  margin: 1em 0;
  line-height: 1.6;
}

.cd-timeline-content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  height: 0;
  width: 0;
  border: 7px solid transparent;
  border-right: 7px solid #333C42;
}

@media only screen and (min-width: 768px) {
  .cd-timeline-content h2 {
    font-size: 20px;
    font-size: 1.5rem;
  }
  .cd-timeline-content p {
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-content .cd-read-more, .cd-timeline-content .cd-date {
    font-size: 14px;
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 1170px) {
  .cd-timeline-content {
    color: white;
    margin-left: 0;
    padding: 1.6em;
    width: 37%;
    margin: 0 4%
  }
  .cd-timeline-content::before {
    top: 24px;
    left: 100%;
    border-color: transparent;
    border-left-color: #333C42;
  }
  .cd-timeline-content .cd-date {
    position: absolute;
    width: 100%;
    left: 122%;
    top: 6px;
    font-size: 16px;
    font-size: 1rem;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
    top: 24px;
    left: auto;
    right: 100%;
    border-color: transparent;
    border-right-color: #333C42;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
    float: right;
  }
  .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
    left: auto;
    right: 122%;
    text-align: right;
  }
}*/

export { Wrapper, Block };
