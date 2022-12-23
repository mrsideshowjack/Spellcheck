import { useState } from "react";
import { List, Detail, ActionPanel, Action, showToast, Toast } from "@raycast/api";
import { useFetch } from "@raycast/utils";

export default function Main() {
  const [searchText, setSearchText] = useState("");
  const { isLoading, data } = useFetch(`https://reqres.in/api/unknown/${searchText}`, {
    // to make sure the screen isn't flickering when the searchText changes
    keepPreviousData: true,
    isLoading: false
  });
  console.log(data);
  
  const msg = formatRes(data)

  function formatRes(data){
    return `
    This is data ${data.data[1].name} ${searchText}
    `
  }

  // return (
  //       <Detail
  //       isLoading={isLoading}
  //       markdown={msg}
  //       searchBarPlaceholder={"test"}
  //       onSearchTextChange={(searchText) => setSearchText(searchText.trim())}
  //       actions={
  //         <ActionPanel>
  //           <Action.CopyToClipboard title="Copy corrected spelling" content="stuff to copy" />
  //         </ActionPanel>
  //       }
  //     />
  // );
  return (
    <List navigationTitle="Search Beers" searchBarPlaceholder="Search your favorite beer">
      <List.Item title="Augustiner Helles" />
      <List.Item title="Camden Hells" />
      <List.Item title="Leffe Blonde" />
      <List.Item title="Sierra Nevada IPA" />
    </List>
  );
};

async function fetchApps(): Promise<Response | null> {
  try {
    const response = await fetch("https://app.airport.community/api/apps");
    const json: any = await response.json();
    return json as Response;
  } catch (error) {
    console.error(error);
    showToast(Toast.Style.Failure, "Could not load apps");
    return Promise.resolve(null);
  }
}