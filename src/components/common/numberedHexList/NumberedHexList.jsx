/**
 * @file NumberedHexList.jsx
 * @module UI/NumberedHexList
 * @desc Renders a vertical numbered list where each number is displayed inside a hexagon.
 *       Supports optional icons and custom text for each list item. Commonly used for 
 *       feature lists or step-by-step instructional content.
 *
 * @props {Array} featuresList - An array of objects containing `icon` and `text` properties for each item.
 * @props {string} title - Optional title displayed above the list.
 * 
 * @example
 * const featuresList = [
 *   { icon: <IconComponent />, text: "Feature description" },
 *   { icon: <AnotherIcon />, text: "Another feature" }
 * ];
 * 
 * <NumberedHexList title="Key Features" featuresList={featuresList} />
 *
 * @author Chace Nielson
 * @created Mar 26, 2025
 * @updated Apr 2, 2025
 */

// import styles
import'./NumberedHexList.styles.css';

export default function NumberedHexList({ featuresList, title }) {
  return (
      <div className="w-full px-4">
        <h3 className="text-3xl font-bold  mb-2">{title} </h3> 
        {title && <hr className="border-tertiary-alt mb-4" />}
        <ol className="features-list px-2">
          {featuresList.map((feature, index) => (
            <li key={index} className="feature-list-item ">
            <div className="flex-shrink-0 min-w-[50px] flex justify-center">
              <div className="feature-number-hex" />
            </div>
            <div className="font-body text-base max-w-3xl flex items-center gap-2">
              <span className="w-8 h-8 text-xl flex items-center justify-center shrink-0">
                {feature.icon}
              </span>
              <span>{feature.text}</span>
            </div>
          </li>  
          ))}
        </ol>
      </div>
  );
}