import React from "react";
import { Card, Tag } from "antd";
import {
  ComponentPreviewArea,
  StyledDescriptions,
  ComponentInfoContainer,
} from "./styles";
import { IComponentContract } from "../../types/commons/componentContract";

type ComponentPreviewProps = {
  componentContract: IComponentContract;
};

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  componentContract,
}) => {
  return (
    <Card
      cover={
        <ComponentPreviewArea>
          <componentContract.component />
        </ComponentPreviewArea>
      }
    >
      <Card.Meta
        title={componentContract.componentName}
        description={
          <ComponentInfoContainer>
            Prop Types:
            <StyledDescriptions bordered column={1} size="small">
              {componentContract.propTypes.map((el) => (
                <StyledDescriptions.Item label={el.name} key={el.name}>
                  {el.types.map((type, i) => (
                    <Tag key={i}>{type}</Tag>
                  ))}
                  {el.defaultValue && (
                    <Tag color="geekblue">Default Value: {el.defaultValue}</Tag>
                  )}
                </StyledDescriptions.Item>
              ))}
            </StyledDescriptions>
          </ComponentInfoContainer>
        }
      />
    </Card>
  );
};

export default ComponentPreview;
