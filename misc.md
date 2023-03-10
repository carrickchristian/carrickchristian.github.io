---
layout: page
title: Misc
---

## Plotting spectral sequences 

I spend a lot of time computing spectral sequences, and the various software available to plot spectral sequences is indispensable. I use Bruner's [ext](https://lists.lehigh.edu/pipermail/algtop-l/2022q3/004498.html) software constantly to compute $Ext_{\mathcal{A}}$ and $Ext_{\mathcal{A}(2)}$ and plot the corresponding Adams charts. I use Hood Chatham's [spectral sequences](https://github.com/hoodmane/js_spectralsequences) package to display spectral sequences in Latex documents.

In a different direction, my brother [Darius Carrick](https://www.dariuscarrick.dev/) and I are working on a React app [ssplot](https://ssplot.netlify.app) to plot bigraded rings from [Macaulay2](http://www2.macaulay2.com/Macaulay2/) output onto a grid using Google charts. This works pretty well if you are just trying to explore a spectral sequence page-by-page without plotting differentials, structure lines, etc. It works especially well if you are working with trigraded SS's and you want to plot some bigraded plane. For instance, with slice SS's it is easier to describe the pages as $RO(G)$-graded rings, but you would like a plot of the SS in integer stems.

## Example: Slice$(k_\mathbb{R})$

As an example, let's plot the (integer-graded, i.e. bidegrees $(a+b\sigma,s)$ with $b=0$) pages of the slice spectral sequence for $k_{\mathbb{R}}$. It has $RO(C_2)$-graded $E_2$-page

$$E_2=\mathbb{Z}[a_\sigma,u_{2\sigma},\overline{v}_1]/(2a_\sigma)$$

The generators have the following bidegrees

$$
\begin{align*}
|a_\sigma|&=(-\sigma,1)\\
|u_{2\sigma}|&=(2-2\sigma,0)\\
|\overline{v}_1|&=(1+\sigma,0)
\end{align*}
$$ 

We can define this ring in Macaulay2 (as a trigraded ring $(a,b,s)$ corresponding to stem $a+b\sigma$ in filtration $s$) as follows.

<p class="message">
{% raw %}R = ZZ[a,u,v,Degrees=>{{0,-1,1},{2,-2,0},{1,1,0}}]/ideal{2*a}{% endraw %}
</p>

You can ask Macaulay2 for a basis of any given tridegree, and the following gives us a basis of the integer $(b=0)$ bidegrees in stems $\le 20$. Here $j$ goes from $0$ to $i$ because the $C_2$-slice SS for a slice connective theory always lies between $y=0$ and $y=x$.

<p class="message">
{% raw %}for i from 0 to 20 list (for j from 0 to i list (i,j,basis({i,0,j},R))){% endraw %}
</p>

This outputs the following.

<p class="message">
{% raw %}{{(0, 0, | 1 |)}, {(1, 0, 0), (1, 1, | av |)}, {(2, 0, 0), (2, 1, 0), (2,
     --------------------------------------------------------------------------
     2, | a2v2 |)}, {(3, 0, 0), (3, 1, 0), (3, 2, 0), (3, 3, | a3v3 |)}, {(4,
     --------------------------------------------------------------------------
     0, | uv2 |), (4, 1, 0), (4, 2, 0), (4, 3, 0), (4, 4, | a4v4 |)}, {(5, 0,
     --------------------------------------------------------------------------
     0), (5, 1, | auv3 |), (5, 2, 0), (5, 3, 0), (5, 4, 0), (5, 5, | a5v5 |)},
     --------------------------------------------------------------------------
     {(6, 0, 0), (6, 1, 0), (6, 2, | a2uv4 |), (6, 3, 0), (6, 4, 0), (6, 5, 0),
     --------------------------------------------------------------------------
     (6, 6, | a6v6 |)}, {(7, 0, 0), (7, 1, 0), (7, 2, 0), (7, 3, | a3uv5 |),
     --------------------------------------------------------------------------
     (7, 4, 0), (7, 5, 0), (7, 6, 0), (7, 7, | a7v7 |)}, {(8, 0, | u2v4 |), (8,
     --------------------------------------------------------------------------
     1, 0), (8, 2, 0), (8, 3, 0), (8, 4, | a4uv6 |), (8, 5, 0), (8, 6, 0), (8,
     --------------------------------------------------------------------------
     7, 0), (8, 8, | a8v8 |)}, {(9, 0, 0), (9, 1, | au2v5 |), (9, 2, 0), (9, 3,
     --------------------------------------------------------------------------
     0), (9, 4, 0), (9, 5, | a5uv7 |), (9, 6, 0), (9, 7, 0), (9, 8, 0), (9, 9,
     --------------------------------------------------------------------------
     | a9v9 |)}, {(10, 0, 0), (10, 1, 0), (10, 2, | a2u2v6 |), (10, 3, 0), (10,
     --------------------------------------------------------------------------
     4, 0), (10, 5, 0), (10, 6, | a6uv8 |), (10, 7, 0), (10, 8, 0), (10, 9, 0),
     --------------------------------------------------------------------------
     (10, 10, | a10v10 |)}, {(11, 0, 0), (11, 1, 0), (11, 2, 0), (11, 3, |
     --------------------------------------------------------------------------
     a3u2v7 |), (11, 4, 0), (11, 5, 0), (11, 6, 0), (11, 7, | a7uv9 |), (11, 8,
     --------------------------------------------------------------------------
     0), (11, 9, 0), (11, 10, 0), (11, 11, | a11v11 |)}, {(12, 0, | u3v6 |),
     --------------------------------------------------------------------------
     (12, 1, 0), (12, 2, 0), (12, 3, 0), (12, 4, | a4u2v8 |), (12, 5, 0), (12,
     --------------------------------------------------------------------------
     6, 0), (12, 7, 0), (12, 8, | a8uv10 |), (12, 9, 0), (12, 10, 0), (12, 11,
     --------------------------------------------------------------------------
     0), (12, 12, | a12v12 |)}, {(13, 0, 0), (13, 1, | au3v7 |), (13, 2, 0),
     --------------------------------------------------------------------------
     (13, 3, 0), (13, 4, 0), (13, 5, | a5u2v9 |), (13, 6, 0), (13, 7, 0), (13,
     --------------------------------------------------------------------------
     8, 0), (13, 9, | a9uv11 |), (13, 10, 0), (13, 11, 0), (13, 12, 0), (13,
     --------------------------------------------------------------------------
     13, | a13v13 |)}, {(14, 0, 0), (14, 1, 0), (14, 2, | a2u3v8 |), (14, 3,
     --------------------------------------------------------------------------
     0), (14, 4, 0), (14, 5, 0), (14, 6, | a6u2v10 |), (14, 7, 0), (14, 8, 0),
     --------------------------------------------------------------------------
     (14, 9, 0), (14, 10, | a10uv12 |), (14, 11, 0), (14, 12, 0), (14, 13, 0),
     --------------------------------------------------------------------------
     (14, 14, | a14v14 |)}, {(15, 0, 0), (15, 1, 0), (15, 2, 0), (15, 3, |
     --------------------------------------------------------------------------
     a3u3v9 |), (15, 4, 0), (15, 5, 0), (15, 6, 0), (15, 7, | a7u2v11 |), (15,
     --------------------------------------------------------------------------
     8, 0), (15, 9, 0), (15, 10, 0), (15, 11, | a11uv13 |), (15, 12, 0), (15,
     --------------------------------------------------------------------------
     13, 0), (15, 14, 0), (15, 15, | a15v15 |)}, {(16, 0, | u4v8 |), (16, 1,
     --------------------------------------------------------------------------
     0), (16, 2, 0), (16, 3, 0), (16, 4, | a4u3v10 |), (16, 5, 0), (16, 6, 0),
     --------------------------------------------------------------------------
     (16, 7, 0), (16, 8, | a8u2v12 |), (16, 9, 0), (16, 10, 0), (16, 11, 0),
     --------------------------------------------------------------------------
     (16, 12, | a12uv14 |), (16, 13, 0), (16, 14, 0), (16, 15, 0), (16, 16, |
     --------------------------------------------------------------------------
     a16v16 |)}, {(17, 0, 0), (17, 1, | au4v9 |), (17, 2, 0), (17, 3, 0), (17,
     --------------------------------------------------------------------------
     4, 0), (17, 5, | a5u3v11 |), (17, 6, 0), (17, 7, 0), (17, 8, 0), (17, 9, |
     --------------------------------------------------------------------------
     a9u2v13 |), (17, 10, 0), (17, 11, 0), (17, 12, 0), (17, 13, | a13uv15 |),
     --------------------------------------------------------------------------
     (17, 14, 0), (17, 15, 0), (17, 16, 0), (17, 17, | a17v17 |)}, {(18, 0, 0),
     --------------------------------------------------------------------------
     (18, 1, 0), (18, 2, | a2u4v10 |), (18, 3, 0), (18, 4, 0), (18, 5, 0), (18,
     --------------------------------------------------------------------------
     6, | a6u3v12 |), (18, 7, 0), (18, 8, 0), (18, 9, 0), (18, 10, | a10u2v14
     --------------------------------------------------------------------------
     |), (18, 11, 0), (18, 12, 0), (18, 13, 0), (18, 14, | a14uv16 |), (18, 15,
     --------------------------------------------------------------------------
     0), (18, 16, 0), (18, 17, 0), (18, 18, | a18v18 |)}, {(19, 0, 0), (19, 1,
     --------------------------------------------------------------------------
     0), (19, 2, 0), (19, 3, | a3u4v11 |), (19, 4, 0), (19, 5, 0), (19, 6, 0),
     --------------------------------------------------------------------------
     (19, 7, | a7u3v13 |), (19, 8, 0), (19, 9, 0), (19, 10, 0), (19, 11, |
     --------------------------------------------------------------------------
     a11u2v15 |), (19, 12, 0), (19, 13, 0), (19, 14, 0), (19, 15, | a15uv17 |),
     --------------------------------------------------------------------------
     (19, 16, 0), (19, 17, 0), (19, 18, 0), (19, 19, | a19v19 |)}, {(20, 0, |
     --------------------------------------------------------------------------
     u5v10 |), (20, 1, 0), (20, 2, 0), (20, 3, 0), (20, 4, | a4u4v12 |), (20,
     --------------------------------------------------------------------------
     5, 0), (20, 6, 0), (20, 7, 0), (20, 8, | a8u3v14 |), (20, 9, 0), (20, 10,
     --------------------------------------------------------------------------
     0), (20, 11, 0), (20, 12, | a12u2v16 |), (20, 13, 0), (20, 14, 0), (20,
     --------------------------------------------------------------------------
     15, 0), (20, 16, | a16uv18 |), (20, 17, 0), (20, 18, 0), (20, 19, 0), (20,
     --------------------------------------------------------------------------
     20, | a20v20 |)}}{% endraw %}
     </p>

Paste this into the ssplot box and you get the following picture.

![E2kR](/e2kR.png "E2kR")

Hovering over the dots will tell you the names of the classes. This spectral sequence has just one differential, $d_3(u_{2\sigma})=a_\sigma^3\overline{v}_1$. Computing homology, we have

$$E_4=\mathbb{Z}[a_\sigma,m_1,u_{2\sigma}^2,\overline{v}_1]/(2a_\sigma,a_\sigma m_1,m_1^2-4u_{2\sigma}^2,a_\sigma^3\overline{v}_1)$$

where $m_1=[2u_{2\sigma}]$. All the algebra generators now are permanent cycles, so this is the $E_\infty$-page. We input this into Macaulay2 as follows

<p class="message">
{% raw %}R = ZZ[a,m,u,v,Degrees=>{{0,-1,1},{2,-2,0},{4,-4,0},{1,1,0}}]/ideal{2*a,a*m,m^2-4*u,a^3*v}{% endraw %}
</p>

Getting a basis through the 50 stem and plugging into ssplot we have the following picture of $E_\infty$. 

![EinftykR](/EinftykR.png "EinftykR")

We see the expected 8-fold Bott periodicity. By clicking the bars at the top, we can toggle the pages or display them simultaneously.








