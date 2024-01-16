---
title: "All About Zip Files"
date: 2024-01-12
excerpt_separator: "<!--more-->"
categories:
  - Tutorials
tags:
  - Windows
  - Basics
---

Over the years I have made a large number of modding tutorials. I've noticed that many tutorials out there can be a bit challenging for beginners, since they often assume the viewer has a basic understanding of certain things. This post is aimed ot help those just starting their journey into PC gaming and/or modding. Today we will look at compressed Zip files. What they are, and how to work with them. 

```yaml
excerpt_separator: "<!--more-->"
```
**What Are Zipped Files?**
Zipped files, commonly ending in .zip, are compressed folders. Think of them as suitcases where you can pack multiple files or folders tightly together to save space. This compression is especially useful for reducing file size, which makes downloading these files or cloud storage more efficient. For this reason many mods and programs are downloaded as compressed files so that it takes less time to download these large files.

ZIP isn't the only format for compressed files, though. A few popular formats you might encounter are .rar and .7z files. These filetypes offer better compression at the cost of a longer compress time and more CPU power, they also require specific software to open, as we'll discuss shortly.

**How Do Zipped Files Work?**

When files are zipped, a compression algorithm removes redundant information from the file temporarily. This process significantly reduces the file size without permanently altering the original data. When you unzip the file, the algorithm restores it to its original state, with all your data intact. Imagine you have a document where the phrase "Do not forget" is repeated a hundred times. Instead of storing this phrase repeatedly, a compression algorithm can store it once and simply reference it each time it appears.

**Working with compressed files**

For anyone using Windows 11, I reccomend using the tool NanaZip to work with compressed files. In their own words "NanaZip is an open source file archiver intended for the modern Windows experience, forked from the source code of well-known open source file archiver 7-Zip". One important feature is that it supports new context menu introduced by Windows 11. It can be downloaded and installed from the Windows Store, making it very easy to install and set up.

[Download NanaZip]("https://www.microsoft.com/store/apps/9N8G7TSCL18R");


Once you have this tool installed working with it is very easy.

After downloading a compressed file right click on it. Here you will see a new option in the conext menu labelled NanaZip. Hover your mouse over NanaZip and then select the option: Extract to "FileName\"
After that it will take a moment and extract the contents of the zipped files into a new folder of the same name. 

If you want to compress a file yourself, then you can click on a folder and select: Add to Archive . This will the compress the file for you to transfer elsewhere or extract later.

For multiple zipped files, you can select all and right-click to unzip them simultaneously with Nanazip. This will appear as Extract to "*\" and each file will be put in its own folder.

![Using NanaZip](/assets/images/using_nana_zip.jpg)

Nanazip is a straightforward and powerful tool that simplifies the process of working with compressed files. Whether you’re dealing with ZIP, RAR, or 7z files, you should now have the tools and understanding you need to work with these files. Remember, understanding these basic tech concepts can significantly enhance your digital proficiency. Stay tuned for more tech tips and tutorials! And have an excellent day