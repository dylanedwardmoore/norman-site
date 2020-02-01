import React from 'react';
import classNames from 'classnames'
import { Nav, Row, Col } from 'react-bootstrap';

const SPY_INTERVAL = 10;

export type ScrollspyMenuItem = {
  id: string,
  displayText: string, 
}

interface SpyItem {
  inView: boolean;
  element: HTMLElement;
  displayName: string;
}

 interface ScrollspyProps {
  menuItems: ScrollspyMenuItem[];
  offset: number;
  itemContainerClassName?: string;
  activeItemClassName?: string;
  itemClassName?: string;
}

interface ScrollspyState {
  items: SpyItem[];
}


class Scrollspy extends React.Component<ScrollspyProps, ScrollspyState> {
   constructor(props: any) {
    super(props);
    this.state = {
      items: []
    };
  }
  
  public static defaultProps: Partial<ScrollspyProps> = {
    offset: 2
  };
     
  private timer: number = 0;

  public componentDidMount() {
    this.timer = window.setInterval(() => this.spy(), SPY_INTERVAL);
  }

  public componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  private isInView = (element: HTMLElement) => {
    if (!element) {
      return false;
    }
    const { offset } = this.props;
    const rect = element.getBoundingClientRect();

    return rect.top >= 0 - offset && rect.bottom <= window.innerHeight + offset;
  };

  private scrollTo(element: HTMLElement) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  private spy() {
    const items = this.props.menuItems
      .map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          return {
            inView: this.isInView(element),
            displayName: item.displayText,
            element
          } as SpyItem;
        } else {
          return;
        }
      })
      .filter(item => item);

    const firstTrueItem = items.find(item => !!item && item.inView);

    if (!firstTrueItem) {
      return; // dont update state
    } else {
      const update = items.map(item => {
        return { ...item, inView: item === firstTrueItem } as SpyItem;
      });

      this.setState({ items: update });
    }
  }
  
  public render() {
    const {
      itemContainerClassName,
      activeItemClassName,
      itemClassName
    } = this.props;
    return (
      <Nav className={classNames(itemContainerClassName) + " flex-column"}>
        {this.state.items.map((item, k) => {
          return (
            <Row><Col>
            <Nav.Link
              className={classNames(
                itemClassName,
                item.inView ? activeItemClassName : null
              )}
              key={k}
              onClick={() => {
                this.scrollTo(item.element);
              }}
            >
              {item.displayName}
            </Nav.Link>
            </Col>
            <Col>
            <div className="worksTimelineActive"></div>
            </Col>
            </Row>
          );
        })}
      </Nav>
    );
  }
}

export default Scrollspy;
