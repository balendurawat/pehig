import { expect } from "chai";
import { ethers } from "hardhat";

describe("Blog", function () {
  
  if("Should create a post", async function () {
    const Blog = await ethers.getContractFactory("Blog");
    const blog = await Blog.deploy("My blog");
    await blog.deployed()
    await blog.createPost("My first post", "12345")

    const posts = await blog.fetchPosts();
    expect(posts[0].title).to.equal("My first post")


  })

})