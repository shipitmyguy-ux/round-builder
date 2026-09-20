package com.athena.roundbuilder;
import android.app.*;import android.os.*;import android.webkit.*;import android.view.*;
public class MainActivity extends Activity {
 WebView web;
 @Override public void onCreate(Bundle b){super.onCreate(b);getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
  web=new WebView(this); WebSettings s=web.getSettings(); s.setJavaScriptEnabled(true); s.setDomStorageEnabled(true); s.setAllowFileAccess(true);
  web.setWebViewClient(new WebViewClient()); web.loadUrl("file:///android_asset/index.html"); setContentView(web);
 }
 @Override public void onPause(){web.evaluateJavascript("window.saveGame&&window.saveGame()",null);super.onPause();}
 @Override public void onBackPressed(){if(web.canGoBack())web.goBack();else super.onBackPressed();}
}
