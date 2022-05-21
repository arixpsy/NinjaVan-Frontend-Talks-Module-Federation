import React, { useState, useEffect } from "react";
import packageJson from "./../../../../package.json";
import { Descriptions } from "antd";
import { Container } from "../../constants/styles";

const HomePage: React.FC = () => {
  const [allDependencies, setAllDependencies] = useState<
    Array<[string, string]>
  >([]);

  useEffect(() => {
    const dependencyList = [
      ...Object.keys(packageJson.dependencies),
      ...Object.keys(packageJson.devDependencies),
    ];
    dependencyList.sort();

    const tempArray = [];
    for (const name of dependencyList) {
      if (name in packageJson.dependencies) {
        tempArray.push([name, packageJson.dependencies[name]]);
      } else {
        tempArray.push([name, packageJson.devDependencies[name]]);
      }
    }

    setAllDependencies(tempArray);
  }, [packageJson]);

  return (
    <Container>
      <Descriptions title="Project Details" bordered>
        <Descriptions.Item label="Project Name">
          {packageJson.name}
        </Descriptions.Item>
        <Descriptions.Item label="Project Version">
          {packageJson.version}
        </Descriptions.Item>
      </Descriptions>

      <Descriptions title="Author" bordered>
        <Descriptions.Item label="Name">
          {packageJson.author.name}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {packageJson.author.email}
        </Descriptions.Item>
      </Descriptions>

      <Descriptions
        title="Project Dependencies"
        bordered
        column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 2, xs: 1 }}
      >
        {allDependencies.map(([packageName, version]) => (
          <Descriptions.Item key={packageName} label={packageName}>
            {version}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Container>
  );
};

export default HomePage;
