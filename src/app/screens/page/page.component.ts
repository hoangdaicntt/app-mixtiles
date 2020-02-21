import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  pageContent = {
    title: 'As election looms, Netanyahu announces new construction in East Jerusalem',
    content: '<p><cite>Jerusalem (CNN)</cite>With eleven days to go until Israel&#39;s election, Prime Minister Benjamin Netanyahu has announced plans to build thousands of new homes in a part of Jerusalem that the international community holds as the capital of a future Palestinian state.</p>\n' +
      '<p>The announcement immediately drew verbal fire from Palestinians, who called the planned construction &quot;land theft&quot; and a &quot;violation of international law.&quot; The international community considers Israeli neighborhoods in East Jerusalem as settlements in violation of international law.</p>\n' +
      '<p>But Israel insists it has the right to build anywhere in its capital city. It is backed by US President Donald Trump&#39;s new plan for the Middle East, which recognizes a united Jerusalem as Israel&#39;s capital and designates the planned construction zone as Israeli territory.</p>\n' +
      '<p>&quot;We did this then in the face of strong international opposition. We overcame every obstacle and we did it, and see what we have done in Jerusalem,&quot; Netanyahu said. &quot;We are connecting Jerusalem. We are connecting all parts of the united Jerusalem, the rebuilt Jerusalem. It is a source of great pride and is great news for the entire people of Israel.&quot;</p>\n' +
      '<p><a href="https://edition.cnn.com/2020/02/18/middleeast/benjamin-netanyahu-trial-israel-election-intl/index.html">Benjamin Netanyahu&#39;s corruption trial will start two weeks after Israel&#39;s elections</a></p>\n' +
      '<p>The Prime Minister announced 3,000 new units in Givat Hamatos, a location south of the Old City of Jerusalem. Though Israel has had plans to build there for years, construction on the open piece of land has been delayed because of international opposition. Netanyahu said the first 1,000 of these units will be put up for sale in the coming days.</p>\n' +
      '<p>An additional 1,000 units will be built in Beit Safafa, an Arab neighborhood which straddles the Green Line adjacent to Givat Hamatos.</p>\n' +
      '<p>Netanyahu also announced the establishment of a new neighborhood, called Har Homa Heh, an expansion of the existing neighborhood of Har Homa on the southeastern outskirts of the city. Netanyahu said the new neighborhood would have 2,200 units, able to house approximately 12,000 people.</p>\n' +
      '<p><a href="https://edition.cnn.com/2020/02/12/middleeast/un-blacklist-israel-settlements-intl/index.html">UN publishes &#39;blacklist&#39; of companies doing business in Israeli settlements</a></p>\n' +
      '<p>Palestine Liberation Organization (PLO) Secretary General Saeb Erakat called for international condemnation of what he called Israel&#39;s &quot;colonial project&quot; of settlement construction which he said, &quot;articulates Israel&#39;s rejection of the right of Palestine and Palestinians to exist.&quot;</p>\n' +
      '<p>Israeli opposition lawmakers also slammed the announcement as an election stunt. Labor member of Knesset Revital Swid said, &quot;Netanyahu ... is now ready to promise everything. Construction over the Green Line in Jerusalem, in an area that Netanyahu himself froze and kept frozen for years, must be done with sensitivity and common sense, and not an irresponsible decision to scrape a few more votes from the right.&quot;</p>\n' +
      '<p>Earlier this month, the city of Jerusalem advanced plans for a new neighborhood in Atarot on the site of a shuttered airport, according to Ir Amim, a non-profit organization that that seeks what it calls an equitable and sustainable city for both Israelis and Palestinians. If constructed, Atarot would be the first new Jewish neighborhood built over the Green Line in two decades, according to Ir Amim spokeswoman Amy Cohen.</p>\n' +
      '<p>Atarot is also on the eastern side of Israel&#39;s separation barrier and appears to be envisioned as Palestinian land according to the Trump administration&#39;s plan. The US and Israeli administrations are still in the process of establishing a joint committee to map out Israel&#39;s annexation of parts of the West Bank, in accordance with the Trump plan.</p>\n' +
      '<p><a href="https://edition.cnn.com/2020/01/29/world/trump-map-israel-annexation-meanwhile-in-america-january-29-intl/index.html">Trump&#39;s plan gives Israel a green light to annex part of the West Bank. Here&#39;s what that looks like</a></p>\n' +
      '<p>&quot;These measures serve to further seal off East Jerusalem from the West Bank and reinforce Israeli control of these areas, rendering the two-state framework based on two capitals in the heart of Jerusalem nonviable,&quot; Cohen said in response to the Atarot plans.</p>\n' +
      '<p>Peace Now, a left-wing organization that monitors the expansion of settlements in the West Bank and East Jerusalem called the new plans &quot;a serious blow to the two-state solution. Netanyahu&#39;s actions, including promoting this expansion, are clear proof that he is doing everything neither to reach peace nor to lead to the resolution of the conflict.&quot;</p>\n' +
      '<p>With less than two weeks to go until the elections, Netanyahu&#39;s latest announcement is an attempt to woo right-wing voters. Election polls have repeatedly shown Netanyahu&#39;s Likud party trailing the rival Blue and White party by one or two seats. This marks Israel&#39;s third election in less than 12 months, as the country remains mired in political deadlock that neither Netanyahu nor Blue and White leader Benny Gantz have been able to break.</p>\n'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
