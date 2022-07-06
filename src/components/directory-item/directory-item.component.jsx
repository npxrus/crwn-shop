import {
  DirectoryItemBackground,
  DirectoryItemBody,
  DirectoryItemContainer,
  DirectoryItemText,
  DirectoryItemTitle,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <DirectoryItemContainer>
      <DirectoryItemBackground
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <DirectoryItemBody>
        <DirectoryItemTitle>{title}</DirectoryItemTitle>
        <DirectoryItemText>Shop Now</DirectoryItemText>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
