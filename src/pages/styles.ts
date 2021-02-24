import styled from 'styled-components'

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 64px 0 0 50%;
  transform: translateX(-50%);
  width: clamp(300px, 70%, 800px);

  border-radius: 8px;
  border: solid 1px purple;

  * {
    font-size: clamp(1rem, -0.5rem + 6.6667vw, 2rem);
  }

  h1 {
    font-size: clamp(1.2rem, -0.5rem + 6.6667vw, 3rem);

    font-weight: normal;
    margin: 32px 0 0 0;
    padding: 8px;
    border-radius: 4px;

    color: purple;
  }

  form {
    padding: 32px;
    border-radius: 4px;

    input {
      width: 100%;
      padding: 4px 4px 4px 8px;
      margin-bottom: 32px;
      border-radius: 8px;

      color: purple;
      border: solid 1px purple;
      background-color: transparent;

      &::placeholder {
        color: purple;
        opacity: 0.8;
      }
    }

    button {
      padding: 8px;
      width: 100%;
      border-radius: 8px;

      color: white;
      background-color: purple;
    }
  }

  h2 {
    font-size: clamp(1.2rem, -0.5rem + 6.6667vw, 2.5rem);
    font-weight: normal;
    margin-bottom: 32px;
    padding: 8px;
    border-radius: 4px;

    color: purple;
  }
`

export default Style
