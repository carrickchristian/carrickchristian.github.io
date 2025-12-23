---
layout: page
title: Misc
---

## Ext Resolvers

Gijs Heuts and I recently supervised the bachelors theses of [Chris Vos](www.chrisvos.net/math) and Jacco Hijmans in which they produced a very flexible Ext resolver, which can be found [here](www.chrisvos.net/math). This can take in a Hopf algebra $A$ over a field $k$ given in terms of generators and relations and a comodule (algebra) $M$ over $A$ and compute $Ext_{A}(k,M)$. They will likely also develop more functionality soon.

As an example, I like to use this to look at the Adams $E_2$ pages for the Ravenel $X(n)$ spectra. To get the $E_2$ page for $X(2)$, follow this [link](https://www.chrisvos.net/comodules-web/) to the resolver webpage and click "Resolve View". There is a change of rings isomorphism

$$Ext_{\mathcal{A}_*}(\mathbb{F}_2,H_*X(2))\cong Ext_{E(\xi_1)\otimes P(\xi_2,\ldots)}(\mathbb{F}_2,\mathbb{F}_2)$$

(see Section 3 of my paper on chromatic defect) so we need to put in the Hopf algebra $E(\xi_1)\otimes P(\xi_2,\ldots)$ and toggle "Use an Fp comodule" off to default to the trivial module $\mathbb{F}_2$ in degree $0$. We put in the generators and relations through a large range, and this looks as follows.

![X(2)](/X(2).png "X(2)inputl")
![X(2)a](/X(2)a.png "X(2)inputal")

Setting the filtration index to 20 and the maximum stem to 60, we click "Resolve" and get the following picture. You can toggle which primitive structure lines to use by clicking on "Lines" to make the picture less busy, and for this I turned off all except $h_0,h_1,h_2$.

![X(2)b](/X(2)b.png "X(2)chart")

## Plotting spectral sequences 

My brother [Darius Carrick](https://www.dariuscarrick.dev/) and I are working on a React app [ssplot](https://ssplot.netlify.app) to plot bigraded rings from [Macaulay2](http://www2.macaulay2.com/Macaulay2/) output onto a grid using Google charts. This works pretty well if you are just trying to explore a spectral sequence page-by-page without plotting differentials, structure lines, etc., though we plan to add this functionality as well. It works especially well if you are working with trigraded SS's and you want to plot some bigraded plane. For instance, with slice SS's it is easier to describe the pages as $RO(G)$-graded rings, but you would like a plot of the SS in integer stems.

## Example: Adams spectral sequence for $ko$

As an example, let's plot the $E_2$ page of the ASS for $ko$. Here we have

$$Ext_{\mathcal{A}_*}(\mathbb{F}_2,H_*ko)\cong Ext_{\mathcal{A}(1)_*}(\mathbb{F}_2,\mathbb{F}_2)\cong\mathbb{F}_2[h_0,h_1,b,B]/(h_0h_1,h_1^3,h_1b,b^2-h_0^2B)$$

The generators have the following Adams bidegrees

$$
\begin{align*}
|h_0|&=(0,1)\\
|h_1|&=(1,1)\\
|b|&=(4,3)\\
|B|&=(8,4)
\end{align*}
$$ 

We can define this ring in Macaulay2 as follows.

<p class="message">
{% raw %}R = ZZ/2[h0,h1,b,B,Degrees=>{{0,1},{1,1},{4,3},{8,4}}]/ideal{h0*h1,h1^3,h1*b,b^2-h_0^2*B}{% endraw %}
</p>

You can ask Macaulay2 for a basis of any given bidegree, and the following gives us a basis of bidegrees $(t-s,s)=(x,y)$ for $0\le x,y\le 50$. 

<p class="message">
{% raw %}for i from 0 to 50 list (for j from 0 to 50 list (i,j,toString flatten entries basis({i,j},R),length flatten entries basis({i,j},R))){% endraw %}
</p>

Here's how this looks in the Macaulay2 web terminal available [here](https://www.unimelb-macaulay2.cloud.edu.au/#home):

![terminal1](/terminal1.png "M2Terminal")

Copying the text from the line o2 and pasting into ssplot, we have the following:

![Adamsko](/Adamsko.png "Adamsko")

Hovering over a dot gives the dimension and basis for that bidegree.

## Example: Slice$(k_\mathbb{R})$

As a slightly more complicated example, let's plot the (integer-graded, i.e. bidegrees $(a+b\sigma,s)$ with $b=0$) pages of the slice spectral sequence for $k_{\mathbb{R}}=BP_{\mathbb{R}}\langle 1\rangle$. It has $RO(C_2)$-graded $E_2$-page

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
{% raw %}E2 = ZZ[a,u,v,Degrees=>{{0,-1,1},{2,-2,0},{1,1,0}}]/ideal{2*a}{% endraw %}
</p>

This time we need to change the code to make sure we only get classes in weight 0 (although we could do the same to get the bigraded page for any fixed weight). Here $j$ goes from $0$ to $i$ because the $C_2$-slice SS for a slice connective theory always lies between $y=0$ and $y=x$.

<p class="message">
{% raw %}for i from 0 to 50 list (for j from 0 to i list (i,j,toString flatten entries basis({i,0,j},E2),length flatten entries basis({i,0,j},E2))){% endraw %}
</p>

This outputs the following.

![E2kR](/e2kR.png "E2kR")

This spectral sequence has just one differential, $d_3(u_{2\sigma})=a_\sigma^3\overline{v}_1$. Computing homology, we have

$$E_4=\mathbb{Z}[a_\sigma,m_1,u_{2\sigma}^2,\overline{v}_1]/(2a_\sigma,a_\sigma m_1,m_1^2-4u_{2\sigma}^2,a_\sigma^3\overline{v}_1)$$

where $m_1=[2u_{2\sigma}]$. All the algebra generators now are permanent cycles, so this is the $E_\infty$-page. We input this into Macaulay2 as follows

<p class="message">
{% raw %}Einfty = ZZ[a,m,u,v,Degrees=>{{0,-1,1},{2,-2,0},{4,-4,0},{1,1,0}}]/ideal{2*a,a*m,m^2-4*u,a^3*v} {% endraw %}
</p>

Getting a basis through the 50 stem and plugging into ssplot we have the following picture of $E_\infty$. 

![EinftykR](/EinftykR.png "EinftykR")

Here's how this all looks in the Macaulay2 terminal:

![terminal2](/terminal2.png "M2Terminal2")

We see the expected 8-fold Bott periodicity. By clicking the bars at the top, we can toggle the pages or display them simultaneously.








