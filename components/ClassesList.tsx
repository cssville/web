import React, { useState } from 'react';
import hljs from 'highlight.js';
import { Chip } from "cssville-ui/build/components/ui/simple/Chip";
import { Stack } from 'cssville-ui/build/components/ui/simple/Stack';
import { Button } from "cssville-ui/build/components/ui/simple/Button";

interface ClassesListProps {
  data: { cssClass: string; cssString: string }[];
  initialVisibleItems?: number;
  loadMoreItems?: number;
}

export const ClassesList: React.FC<ClassesListProps> = ({
  data,
  initialVisibleItems = 20,
  loadMoreItems = 20
}) => {
  const [active, setActive] = useState(0);
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + loadMoreItems);
  };

  return (
    <Stack sm column fullWidth className="max-wid-full">
      <Stack row noGap flexWrap className="gap-3">
        {
          data.slice(0, visibleItems).map((value, i) => {
            const cl = value.cssClass;
            const isActive = i === active;
            return (
              <Chip key={i} sm bold={isActive} disabled={!isActive} onClick={() => { setActive(i) }} className="cur-pointer">
                {cl.split(":")[0]}
              </Chip>
            );
          })
        }
      </Stack>
      {visibleItems < data.length && (
        <Button sm noShadow onClick={handleLoadMore} className="mar-bot-4">
          Load more...
        </Button>
      )}
      <Stack column contentCenter fullWidth>
        <div key={`code-example-${active}`} className="box-siz-border-box max-wid-full ove-auto box-sha-lg pad-6 bor-rad-4">
          <pre className="mar-0">
            <code className="fon-siz-large language-css hljs bor-rad-3 max-wid-md mar-x-auto"
              dangerouslySetInnerHTML={{
                __html:
                  hljs.highlight(data[active].cssString, { language: 'css' }).value
              }}
            />
          </pre>
        </div>
      </Stack>
    </Stack>
  );
};
