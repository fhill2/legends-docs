#!/usr/bin/env python3
import requests
import urllib.parse
import re
import json

response = requests.get('https://leagueoflegends.fandom.com/wiki/Item_(League_of_Legends)')

from bs4 import BeautifulSoup
soup = BeautifulSoup(response.text, 'html.parser')

def get_stats_from_item_page(url):
    """retrieve stats from a LoL wiki item page"""
    response = requests.get(url)
    if response.status_code != 200: 
        return {}

    soup = BeautifulSoup(response.text, 'html.parser')

    # as there are no unique ids or classes identifying the stats section that can be targetted with select()
    # iterate until the stats section is found
    def find_stats_section(sections):
        for section in sections:
            for cc in section.children:
                if cc.text == "Stats":
                    return section
        return False
    
    stats_section = find_stats_section(soup.select('aside.portable-infobox section'))
    # filter 1: sometimes the page does not have a stats section - ignore this page
    if not stats_section:
        return {}

    stats = {}
    for i, div in enumerate(stats_section):
        # filter 1: if number is odd
        if (i % 2) == 1 and i > 2:
            for ele in div.children:
                # filter 2: sometimes the element contains no text
                if ele.text != "\n":
                    print(ele.text)
                    # filter 3: if element text does not start with + or does not match regex, ignore the element text
                    match = re.match(r"^\+\s?(\d+)(.*)$",ele.text)
                    if match is not None:
                        print(match)
                        stat_value = int(match.group(1))
                        stat_name = match.group(2)
                        
                        # if value is percent, store as decimal
                        if stat_name.startswith("%"):
                            stat_value = stat_value / 100
                            stat_name = stat_name[1:]

                        stats[stat_name.strip()] = stat_value
    return stats

# get all items
items = {}
for ll in soup.select('div#item-grid li'):
    for divs in ll.children:
        item_name = divs["data-item"]
        url = "https://leagueoflegends.fandom.com/wiki/" + item_name.replace(" ", "_")
        item_stats = get_stats_from_item_page(url)
        items[item_name] = item_stats
        print(items[item_name])


with open("items.json", "w") as fp:
    json.dump(items , fp, indent=4, sort_keys=True, separators=(',', ': ')) 
