import styled from '@emotion/styled'

/**
 * Объект возвращает <div></div> c кастомной стрелкой
 * На вход принимает параметры расположения стрелки
 * <Arrow innerRef={arrowProps.ref} data-placement={placement} style={arrowProps.style} />
 */
export const Arrow = styled.div`
  position: absolute;
  width: 3em;
  height: 3em;
  &[data-placement*='bottom'] {
    top: 0;
    left: 0;
    margin-top: -0.62em;
    width: 3em;
    height: 1em;
    &::before {
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #D9D4D4 transparent;
    }
  }
  &[data-placement*='top'] {
    bottom: 0;
    left: 0;
    margin-bottom: -1em;
    width: 3em;
    height: 1em;
    &::before {
      border-width: 10px 10px 0 10px;
      border-color: #D9D4D4 transparent transparent transparent;
    }
  }
  &[data-placement*='right'] {
    left: 0;
    margin-left: -0.67em;
    top: 7px!important;
    height: 3em;
    width: 1em;
    &::before {
      top: 0.5em;
      border-width: 10px 10px 10px 0;
      border-color: transparent #D9D4D4 transparent transparent;
    }
  }
  &[data-placement*='left'] {
    right: 0;
    top: 7px!important;
    margin-right: -0.8em;
    height: 3em;
    width: 1em;
    &::before {
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent #D9D4D4;
    }
  }
  &::before {
    content: '';
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }
`;