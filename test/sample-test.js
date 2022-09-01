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

  if("Should edit a post", async function() {
    const Blog = await ethers.getContractFactory("Blog");
    const blog = await Blog.deploy("My blog");
    await blog.deployed()

    await blog.createPost("My Second post", "12345");
    await blog.updatePost(1, "My Update Post", "2345", true)

    posts = await blog.fetchPosts()
    expect(posts[0].title).to.equal("My Updated Post")

  })

  if("Should add update the name", async function() {
    const Blog = await ethers.getContractFactory("Blog");
    const blog = await Blog.deploy("My blog");
    await blog.deployed();

    expect(await blog.name()).to.equal("My Blog")
    await blog.updateName("My new blog");
    expect(await blog.name()).to.equal("My new Blog")
  })

})