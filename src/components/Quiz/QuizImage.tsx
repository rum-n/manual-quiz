import styled from 'styled-components';

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

interface QuizImageProps {
  display: string;
}

export default function QuizImage({ display }: QuizImageProps) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = display;
  const imgElement = tempDiv.querySelector('img');

  if (!imgElement) return null;

  return (
    <ImageWrapper>
      <img
        src={imgElement.src}
        alt={imgElement.alt}
        srcSet={imgElement.srcset}
      />
    </ImageWrapper>
  );
}
